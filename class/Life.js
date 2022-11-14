"use strict";
exports.__esModule = true;
exports.Life = void 0;
var gameTool_1 = require("../gameTool");
var Life = /** @class */ (function () {
    // @ts-ignore
    function Life(properties, major, talents, eventMap) {
        /**
         * 构造函数
         */
        this._eventMap = eventMap;
        this._major = major;
        this._talents = talents;
        this._properties = properties; // TODO
        this._startEventIds = [];
        this._startEventIds.concat(this._major.eventIds); // 将专业特色事件加入初始后选事件中
        for (var _i = 0, _a = this._talents; _i < _a.length; _i++) {
            var _talent = _a[_i];
            this._startEventIds.concat(_talent.eventIds); // 将天赋特色事件加入初始后选事件中
        }
        this._lifeOver = false;
        this._invalidEventIds = [];
    }
    Life.prototype.updateProperties = function (propertiesChange) {
        /**
         * 更新属性值
         */
        for (var i = 0; i < this._properties.length; i++) {
            this._properties[i] += propertiesChange[i];
        }
    };
    Life.prototype.updateStartEventIds = function (event) {
        /**
         * 更新初始候选事件id列表
         */
        this._startEventIds.concat(event.happenList); // 将后导事件更新入初始候选事件中
        // 如果事件是初始候选列表中的事件，更新初始候选列表
        if (event.id in this._startEventIds) {
            this._startEventIds.splice(this._startEventIds.indexOf(event.id), 1); // 从候选事件中将该事件的id删除
        }
    };
    Life.prototype.lifeOver = function () {
        //ToDo
    };
    Life.prototype.lifeStart = function () {
        // 根据天赋更新属性
        for (var _i = 0, _a = this._talents; _i < _a.length; _i++) {
            var _talent = _a[_i];
            this.updateProperties(_talent.propertiesChange);
        }
    };
    Life.prototype.activateAchievement = function (achievementIdList) {
        /**
         * 触发成就
         */
    };
    Life.prototype.genEvent = function (stage) {
        /**
         * 事件迭代
         *
         * @param stage 阶段
         * @return
         */
        // 初始化候选事件列表
        var candidateEvents = this._startEventIds;
        // 从阶段中加载阶段专属的事件列表,并将其添加到候选事件列表中
        candidateEvents = candidateEvents.concat(stage.eventIds);
        // 从eventPool中加载属性对应的事件列表,并将其添加到候选事件列表中!!!!
        // TODO
        candidateEvents = candidateEvents.concat();
        // 随机出符合逻辑的事件
        var isLegal = false; // 初始化合法性, true代表随机出的事件不违背逻辑,false相反
        var eventId = undefined;
        while (!isLegal) {
            // 从候选事件中随机出一个事件的id
            var eventIdx = Math.floor(Math.random() * candidateEvents.length); // 随机事件在候选事件列表的位置
            eventId = candidateEvents.indexOf(eventIdx);
            // 检查逻辑是否正确
            isLegal = !(eventId in this._invalidEventIds); // 检查事件id是否在非法id的列表中
        }
        var event = this._eventMap.get(eventId); // 从eventMap中获取事件
        // 更新参数
        this.updateStartEventIds(event); // 更新初始候选事件id
        this._invalidEventIds.concat(event.noHappenList); // 将先导事件更新如不会发生的事件中
        this._invalidEventIds.concat(eventId); // 保证发生过的事情不会再发生
        this.updateProperties(event.propertyChange); // 更改属性值
        this._lifeOver = event.gameOver; // 检查是否人生结束
        // 触发成就
        (0, gameTool_1.activateAchievement)(event.achievementIdList);
        // 事件结束
        if (this._lifeOver == true)
            this.lifeOver();
    };
    return Life;
}());
exports.Life = Life;
//# sourceMappingURL=Life.js.map