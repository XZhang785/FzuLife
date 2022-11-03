export class LifeEvent {

    // 事件类
    private _id: number; // id标识符
    private _content: string; // 事件内容
    private _achievementIdList: Array<number>; // 触发成就id的列表,可以为None
    private _done: boolean; // 事件是否已经触发,1为触发,0为，没触发过
    private _propertyChange: Array<number>; // 引起的属性变化,6长的数组，没变化就全置0
    private _imgUrl: string; // 图片的连接,可以为None
    private _type: string; // 类别：6个属性，阶段事件，学院事件
    private _stageId: number; // 阶段id
    private _noHappenList: Array<number>; // 后续不触发事件的id列表，可以为None
    private _happenList: Array<number>;// 后续触发事件的id列表,可以为None
    private _gameOver: boolean; // 是否引起游戏的结束, 0为结束，1为未结束

    constructor() {
        /**
         * 构造函数
         */
    }

    // @ts-ignore
    get happenList(): Array<number> {
        return this._happenList;
    }

    // @ts-ignore
    get id(): number {
        return this._id;
    }

    // @ts-ignore
    get imgUrl(): string {
        return this._imgUrl;
    }

    // @ts-ignore
    get content(): string {
        return this._content;
    }

    // @ts-ignore
    get done(): boolean {
        return this._done;
    }

    // @ts-ignore
    set done(value: boolean) {
        this._done = value;
    }

    // @ts-ignore
    get achievementIdList(): Array<number> {
        return this._achievementIdList;
    }
    // @ts-ignore
    get gameOver(): boolean {
        return this._gameOver;
    }

    // @ts-ignore
    get noHappenList(): Array<number> {
        /**
         * get方法
         */
        return this._noHappenList;
    }

    // @ts-ignore
    get propertyChange(): Array<number> {
        return this._propertyChange;
    }

}