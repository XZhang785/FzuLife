export class User{
    // 用户类

    private id: number // 唯一表示符用户id
    private achievementsDone: Array<number> // 用户已触发的成就列表
    private cnt: number // 用户玩的轮次计数,问号表示可有可无

    constructor() {
        // 构造函数
    }
}