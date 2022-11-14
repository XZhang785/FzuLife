export class User{
    // 用户类

    private _id: number // 唯一表示符用户id
    private _achievementsDone: Array<number> // 用户已触发的成就id列表
    private _cnt: number // 用户玩的轮次计数,问号表示可有可无
    private _TimeStamp: number // 最近完成的一局游戏的时间戳

    constructor() {
        // 构造函数
    }

    // @ts-ignore
    set TimeStamp(value: number) {
        this._TimeStamp = value;
    }

    // @ts-ignore
    get TimeStamp(): number {
        return this._TimeStamp;
    }

    // @ts-ignore
    get cnt(): number {
        return this._cnt;
    }

    // @ts-ignore
    get achievementsDone(): Array<number> {
        return this._achievementsDone;
    }

    // @ts-ignore
    get id(): number {
        return this._id;
    }
}