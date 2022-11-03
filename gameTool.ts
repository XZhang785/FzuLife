import {LifeEvent} from "./class/LifeEvent"
import {User} from "./class/User";
import {Achievement} from "./class/Achievement";

// 游戏初始化
export function gameInit(){

}


// 用户认证
export function userAuthenticate() {
    /**
     * 实现用户认证
     *
     * @return user 用户实例
     */
    let user = new User()
    return user
}


// 用户进入游戏页面的时候就加载好的事件数据
export function setEventMap() {
    /**
     * 所有事件的数据(json)，进入游戏时就预加载好数据
     *
     * @return eventMap 事件id与事件的映射
     */
    // @ts-ignore
    let eventMap: Map<number, LifeEvent> = new Map<number, LifeEvent>()

    // 加载部分还带开发
    // ToDo
    return eventMap
}

// 用户进入游戏页面的时候就加载好的成就数据
export function setAchievementMap() {
    /**
     * 所有事件的数据(json)，进入游戏时就预加载好数据
     *
     * @return eventMap 事件id与事件的映射
     */

    // @ts-ignore
    let achievementMap: Map<number, Achievement> = new Map<number, Achievement>()

    // 加载部分还带开发
    // ToDo

    return achievementMap
}



function selectTalent(){
    /**
     * 选择天赋
     */
}

function selectAcademy(){
    /**
     * 选择学院
     */
}


function selectOption(){
    /**
     * 假期选项
     */
}


export function activateAchievement(achievementIdList: Array<number>){
    /**
     * 触发成就
     */
}




