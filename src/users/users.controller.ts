import { Controller, Get, Param, Post, Put, Delete, HttpStatus, Body } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './services/users.service';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
import { CreateUserDto } from './dtos/create-user.dto';

// 这个是控制器层，只是用来分发请求，真正的业务逻辑的处理，应该放到service层
@Controller('users')
export class UsersController {
  // 这里把service层实例注入到控制层
  constructor(private readonly usersService: UsersService) {

  }

  @Get()
  async findAll(): Promise<User[]> {

    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<User> {
    let id = parseInt(params.id);
    if (isNaN(id) || typeof id !== 'number' || id <= 0) {
      throw new ApiException('用户ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
    }
    return await this.usersService.findOne(params.id);
  }

  @Post()
  async create(@Body() user: CreateUserDto) {
    return await this.usersService.create(user);
  }

  @Put()
  async edit(@Body() user: CreateUserDto) {
    return await this.usersService.edit(user);
  }

  @Delete(':id')
  async remove(@Param() params) {
    return await this.usersService.remove(params.id);
  }

}
