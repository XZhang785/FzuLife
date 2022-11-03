import {Stage} from "./Stage";
import {LifeEvent} from "./LifeEvent";
import {activateAchievement} from "../gameTool";
import {Major} from "./Major";
import {Talent} from "./Talent";

export class Life {
    /**
     * 人生（一盘游戏从开始到结束）
     */
    private _properties: Array<number> // 本局人生的属性值:[智力,体质,魅力,财富,运气,心情]
    private _lifeOver: Boolean // 人生是否结束
    private _startEventIds: Array<number> // 每个阶段的初始候选事件id
    private _invalidEventIds: Array<number> // 人生中不会发生的事件的id列表
    private _major: Major // 本局人生的专业
    private _talents: Array<Talent> // 本局天赋
    // @ts-ignore
    private _eventMap: Map<number, LifeEvent> // 初始化事件id与事件的映射

    // @ts-ignore
    constructor(properties: Array<number>, major: Major, talents: Array<Talent>, eventMap: Map<number, LifeEvent>) {

        /**
         * 构造函数
         */
        this._eventMap = eventMap
        this._major = major
        this._talents = talents
        this._properties = properties // TODO
        this._startEventIds = []
        this._startEventIds.concat(this._major.eventIds) // 将专业特色事件加入初始后选事件中
        for(const _talent of this._talents) {
            this._startEventIds.concat(_talent.eventIds) // 将天赋特色事件加入初始后选事件中
        }
        this._lifeOver = false
        this._invalidEventIds = []
    }

    private updateProperties(propertiesChange) {
        /**
         * 更新属性值
         */
        for(let i=0; i<this._properties.length; i++){
            this._properties[i] += propertiesChange[i]
        }
    }

    private updateStartEventIds(event: LifeEvent) {
        /**
         * 更新初始候选事件id列表
         */

        this._startEventIds.concat(event.happenList) // 将后导事件更新入初始候选事件中
        // 如果事件是初始候选列表中的事件，更新初始候选列表
        if (event.id in this._startEventIds) {
            this._startEventIds.splice(this._startEventIds.indexOf(event.id), 1) // 从候选事件中将该事件的id删除
        }
    }

    private lifeOver() {

        //ToDo

    }

    lifeStart() {
        // 根据天赋更新属性
        for(const _talent of this._talents) {
            this.updateProperties(_talent.propertiesChange)
        }
    }

    genEvent(stage: Stage) {
        /**
         * 事件迭代
         *
         * @param stage 阶段
         * @return
         */

        // 初始化候选事件列表
        let candidateEvents: Array<number> = this._startEventIds

        // 从阶段中加载阶段专属的事件列表,并将其添加到候选事件列表中
        candidateEvents = candidateEvents.concat(stage.eventIds)
        // 从eventPool中加载属性对应的事件列表,并将其添加到候选事件列表中!!!!
        // TODO
        candidateEvents = candidateEvents.concat()

        // 随机出符合逻辑的事件
        let isLegal: boolean = false // 初始化合法性, true代表随机出的事件不违背逻辑,false相反
        let eventId = undefined
        while (!isLegal){
            // 从候选事件中随机出一个事件的id
            let eventIdx = Math.floor(Math.random() * candidateEvents.length) // 随机事件在候选事件列表的位置
            eventId = candidateEvents.indexOf(eventIdx)
            // 检查逻辑是否正确
            isLegal = !(eventId in this._invalidEventIds); // 检查事件id是否在非法id的列表中
        }
        let event =  this._eventMap.get(eventId)// 从eventMap中获取事件

        // 更新参数
        this.updateStartEventIds(event) // 更新初始候选事件id
        this._invalidEventIds.concat(event.noHappenList) // 将先导事件更新如不会发生的事件中
        this.updateProperties(event.propertyChange) // 更改属性值
        this._lifeOver = event.gameOver // 检查是否人生结束

        // 触发成就
        activateAchievement(event.achievementIdList)

        // 事件结束
        if(this._lifeOver == true) this.lifeOver()
    }
}