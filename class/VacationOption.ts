export class VacationOption{
    /**
     * 假期选项，对应每个学习过去后出现的选项栏内的选项实例
     */

    private _id: number // 假期选项id
    private _content:String // 假期选项的具体内容
    _propertyChange: Array<number>; // 引起的属性变化,6长的数组，没变化就全置0
    _vacationId: number; // 假期id，1到7，大四下没有对应的假期
}