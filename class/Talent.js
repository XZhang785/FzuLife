"use strict";
exports.__esModule = true;
exports.Talent = void 0;
var Talent = /** @class */ (function () {
    function Talent() {
    }
    Talent.prototype.getButtonInfo = function () {
        return {
            name: this._name,
            color: this._rarity
        };
    };
    Object.defineProperty(Talent.prototype, "eventIds", {
        // @ts-ignore
        get: function () {
            return this._eventIds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Talent.prototype, "name", {
        // @ts-ignore
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Talent.prototype, "propertiesChange", {
        // @ts-ignore
        get: function () {
            return this._propertiesChange;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Talent.prototype, "rarity", {
        // @ts-ignore
        get: function () {
            return this._rarity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Talent.prototype, "id", {
        // @ts-ignore
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Talent;
}());
exports.Talent = Talent;
//# sourceMappingURL=Talent.js.map