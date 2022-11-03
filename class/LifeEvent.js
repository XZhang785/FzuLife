"use strict";
exports.__esModule = true;
exports.LifeEvent = void 0;
var LifeEvent = /** @class */ (function () {
    function LifeEvent() {
        /**
         * 构造函数
         */
    }
    Object.defineProperty(LifeEvent.prototype, "happenList", {
        // @ts-ignore
        get: function () {
            return this._happenList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "id", {
        // @ts-ignore
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "imgUrl", {
        // @ts-ignore
        get: function () {
            return this._imgUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "content", {
        // @ts-ignore
        get: function () {
            return this._content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "done", {
        // @ts-ignore
        get: function () {
            return this._done;
        },
        // @ts-ignore
        set: function (value) {
            this._done = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "achievementIdList", {
        // @ts-ignore
        get: function () {
            return this._achievementIdList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "gameOver", {
        // @ts-ignore
        get: function () {
            return this._gameOver;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "noHappenList", {
        // @ts-ignore
        get: function () {
            /**
             * get方法
             */
            return this._noHappenList;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LifeEvent.prototype, "propertyChange", {
        // @ts-ignore
        get: function () {
            return this._propertyChange;
        },
        enumerable: false,
        configurable: true
    });
    return LifeEvent;
}());
exports.LifeEvent = LifeEvent;
//# sourceMappingURL=LifeEvent.js.map