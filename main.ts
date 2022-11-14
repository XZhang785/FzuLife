import {setEventMap, userAuthenticate, setAchievementMap} from "./gameTool";
import {Talent} from "./class/Talent";
import {Life} from "./class/Life";
import {Stage} from "./class/Stage";
import {Academy} from "./class/Academy";

// 访问游戏
let data = null // 还没想好先用null代替
let usr = userAuthenticate() // 加载用户实例
let eventMap = setEventMap() // 初始化所有事件与其id的映射
let achievementMap = setAchievementMap() // 初始化所有成就与其id的映射
let talentPool = null
let eventPool = null
let majorPool = null

// 设置

// 开始游戏
// 初始化
let major: Academy = selectMajor() // 选择专业
let property: Array<number> = allocateProperties() // 分配属性
let talents: Array<Talent> = selectTalent() // 选择天赋
let stageGen: Iterable<Stage> = getStageGen() // 初始化阶段迭代器
let life = new Life(property, major, talents, eventMap)
life.lifeStart()

// 当用户点击的时候
let stage = stageGen.next()
life.genEvent(stage)


