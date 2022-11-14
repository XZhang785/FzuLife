"use strict";
exports.__esModule = true;
exports.Achievement = void 0;
var Achievement = /** @class */ (function () {
    function Achievement() {
        // 构造函数
    }
    Object.defineProperty(Achievement.prototype, "name", {
        // @ts-ignore
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "color", {
        // @ts-ignore
        get: function () {
            return this._color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "id", {
        // @ts-ignore
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "eventsNeed", {
        // @ts-ignore
        get: function () {
            return this._eventsNeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement.prototype, "propertiesNeed", {
        // @ts-ignore
        get: function () {
            return this._propertiesNeed;
        },
        enumerable: false,
        configurable: true
    });
    Achievement.prototype.checkCondition = function () {
        /**
         * 检查触发条件
         *
         * @return flag true满足触发条件， False为不满足触发条件
         */
        var flag = false;
        return flag;
    };
    return Achievement;
}());
exports.Achievement = Achievement;
//# sourceMappingURL=Achievement.js.map