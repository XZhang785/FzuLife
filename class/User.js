"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User() {
        // 构造函数
    }
    Object.defineProperty(User.prototype, "TimeStamp", {
        // @ts-ignore
        get: function () {
            return this._TimeStamp;
        },
        // @ts-ignore
        set: function (value) {
            this._TimeStamp = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "cnt", {
        // @ts-ignore
        get: function () {
            return this._cnt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "achievementsDone", {
        // @ts-ignore
        get: function () {
            return this._achievementsDone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        // @ts-ignore
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map