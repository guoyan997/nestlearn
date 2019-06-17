// 这个是service层，用来处理业务逻辑，增删改查之类的，这里是接口层，用来定义需要用的到方法，真正的实现，是在service的实现层
import { User } from './user.interface';

export interface IUserService {

  findAll(): Promise<User[]>;

   findOne(id: number): Promise<User>;

   create(User): Promise<User>;

   edit(User): Promise<User>;

   remove(id: number): Promise<boolean>;

}
