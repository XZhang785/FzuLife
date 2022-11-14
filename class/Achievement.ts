export class Achievement {
    // 成就类

    private _eventsNeed: Array<number> // 触发需要的事件id列表，可以为空
    private _propertiesNeed: Array<number> // 触发需要的属性数组,长6，可以为空
    private _id: number // 唯一标识id
    private _color: string // 颜色（稀有度）
    private _name: string // 天赋明

    constructor() {
        // 构造函数
    }

    // @ts-ignore
    get name(): string {
        return this._name;
    }

    // @ts-ignore
    get color(): string {
        return this._color;
    }

    // @ts-ignore
    get id(): number {
        return this._id;
    }

    // @ts-ignore
    get eventsNeed(): Array<number> {
        return this._eventsNeed;
    }

    // @ts-ignore
    get propertiesNeed(): Array<number> {
        return this._propertiesNeed;
    }

    checkCondition() {
        /**
         * 检查触发条件
         *
         * @return flag true满足触发条件， False为不满足触发条件
         */

        let flag = false

        return flag
    }
}