"use strict";
exports.__esModule = true;
exports.activateAchievement = exports.setAchievementMap = exports.setEventMap = exports.userAuthenticate = exports.gameInit = void 0;
var User_1 = require("./class/User");
// 游戏初始化
function gameInit() {
}
exports.gameInit = gameInit;
// 用户认证
function userAuthenticate() {
    /**
     * 实现用户认证
     *
     * @return user 用户实例
     */
    var user = new User_1.User();
    return user;
}
exports.userAuthenticate = userAuthenticate;
// 用户进入游戏页面的时候就加载好的事件数据
function setEventMap() {
    /**
     * 所有事件的数据(json)，进入游戏时就预加载好数据
     *
     * @return eventMap 事件id与事件的映射
     */
    // @ts-ignore
    var eventMap = new Map();
    // 加载部分还带开发
    // ToDo
    return eventMap;
}
exports.setEventMap = setEventMap;
// 用户进入游戏页面的时候就加载好的成就数据
function setAchievementMap() {
    /**
     * 所有事件的数据(json)，进入游戏时就预加载好数据
     *
     * @return eventMap 事件id与事件的映射
     */
    // @ts-ignore
    var achievementMap = new Map();
    // 加载部分还带开发
    // ToDo
    return achievementMap;
}
exports.setAchievementMap = setAchievementMap;
function selectTalent() {
    /**
     * 选择天赋
     */
}
function selectAcademy() {
    /**
     * 选择学院
     */
}
function selectOption() {
    /**
     * 假期选项
     */
}
function activateAchievement(achievementIdList) {
    /**
     * 触发成就
     */
}
exports.activateAchievement = activateAchievement;
//# sourceMappingURL=gameTool.js.map