export class Talent{

    /**
     * 玩家天赋
     */

    private _id: number // 唯一表示符id
    private _color: string // 颜色（稀有度）
    private _propertiesChange: Array<number> // 玩家属性的改变,可以为None
    private _eventIds: Array<number> // 天赋专属事件,可以为None

    // @ts-ignore
    get eventIds(): Array<number> {
        return this._eventIds;
    }

    // @ts-ignore
    get propertiesChange(): Array<number> {
        return this._propertiesChange;
    }

}