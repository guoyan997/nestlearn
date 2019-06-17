import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// 模块化管理，不要吧所有的模块都直接注册到根模块下，每个模块都挂到自身模块的module中，然后这个module再挂到根模块下
import { UsersModule } from './users/users.module';
// users控制层
// users的service实现层

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
