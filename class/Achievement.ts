export class Achievement {
    // 成就类

    private eventsNeed: Array<number> // 触发需要的事件id列表，可以为空
    private propertiesNeed: Array<number> // 触发需要的属性列表,长6，可以为空
    private _id: number // 唯一标识id
    private color: string // 颜色（稀有度）

    constructor() {
        // 构造函数
    }
}