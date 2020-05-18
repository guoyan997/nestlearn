import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CountryModule } from './country/country.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
// 模块化管理，不要吧所有的模块都直接注册到根模块下，每个模块都挂到自身模块的module中，然后这个module再挂到根模块下
// users控制层
// users的service实现层

@Module({
  imports: [UsersModule, CountryModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: '10.74.155.59',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'world',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) { }
}
