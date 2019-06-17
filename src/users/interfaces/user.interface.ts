// 这个是定义的数据model
export interface User {
  //readonly 关键字，它表示被修饰的对象只能在声明的时候或构造函数中初始化。
  readonly id: number;
  readonly name: string;
  readonly age: number;
}