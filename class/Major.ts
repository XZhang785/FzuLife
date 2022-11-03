export class Major {

    /**
     * 专业类
     */


    private id: number // 唯一标识符id
    private _name: string // 专业明
    private type: string // 学院类别, 工,理,文
    private _eventIds: Array<number> // 专业特色事件id列表

    constructor() {
        // 构造函数
    }

    // @ts-ignore
    get eventIds(): Array<number> {
        return this._eventIds;
    }
}