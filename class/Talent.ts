export class Talent{

    /**
     * 玩家天赋
     */

    private _id: number // 唯一表示符id
    private _rarity: string // 稀有度
    private _name: string // 天赋名
    private _propertiesChange: Array<number> // 玩家属性的改变,可以为None
    private _eventIds: Array<number> // 天赋专属事件,可以为None

    getButtonInfo() {
        return {
            name: this._name,
            color: this._rarity,
        }
    }

    // @ts-ignore
    get eventIds(): Array<number> {
        return this._eventIds;
    }

    // @ts-ignore
    get name(): string {
        return this._name;
    }

    // @ts-ignore
    get propertiesChange(): Array<number> {
        return this._propertiesChange;
    }

    // @ts-ignore
    get rarity(): string {
        return this._rarity;
    }

    // @ts-ignore
    get id(): number {
        return this._id;
    }
}