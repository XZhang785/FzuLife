"use strict";
exports.__esModule = true;
var gameTool_1 = require("./gameTool");
var Life_1 = require("./class/Life");
// 访问游戏
var data = null; // 还没想好先用null代替
var usr = (0, gameTool_1.userAuthenticate)(); // 加载用户实例
var eventMap = (0, gameTool_1.setEventMap)(); // 初始化所有事件与其id的映射
var achievementMap = (0, gameTool_1.setAchievementMap)(); // 初始化所有成就与其id的映射
var talentPool = null;
var eventPool = null;
var majorPool = null;
// 设置
// 开始游戏
// 初始化
var major = selectMajor(); // 选择专业
var property = allocateProperties(); // 分配属性
var talents = selectTalent(); // 选择天赋
var stageGen = getStageGen(); // 初始化阶段迭代器
var life = new Life_1.Life(property, major, talents, eventMap);
life.lifeStart();
// 当用户点击的时候
var stage = stageGen.next();
life.genEvent(stage);
//# sourceMappingURL=main.js.map