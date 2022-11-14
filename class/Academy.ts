export class Academy {
    /**
     * 专业类
     */
    
    private _id: number // 唯一标识符id
    private _name: string // 专业明
    private _type: string // 学院类别, 工,理,文
    private _eventIds: Array<number> // 专业特色事件id列表
    private _majorList: Array<String> // 学院下的专业名列表

    constructor() {
        // 构造函数
    }

    // @ts-ignore
    get eventIds(): Array<number> {
        return this._eventIds;
    }

    // @ts-ignore
    get type(): string {
        return this._type;
    }

    // @ts-ignore
    get name(): string {
        return this._name;
    }

    // @ts-ignore
    get id(): number {
        return this._id;
    }
}