export class Stage{
    /**
     * 阶段类，如：一月上
     * @private
     */

    private _id: number // 标识符id
    private _eventIds: Array<number> // 专属该阶段的事件id列表

    constructor(id: number, eventIds: Array<number>) {
        // 构造函数
    }

    // @ts-ignore
    get eventIds(): Array<number> {
        return this._eventIds;
    }
}