import { Controller, Get, Param, Post, Put, Delete, HttpStatus, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { Country } from './country.entity';
import { ApiException } from '../common/exceptions/api.exception';
import { ApiErrorCode } from '../common/enums/api-error-code.enum';
@Controller('country')
export class CountryController {
  // 这里把service层实例注入到控制层
  constructor(private readonly countryService: CountryService) { }

  @Get('list')
  async findAll(): Promise<Country[]> {
    return await this.countryService.find();
  }
  @Get('findone/:id')
  async getCountry(@Param() params): Promise<Country[]> {
    const id = params.id;
    if (id === '') {
      throw new ApiException('ID无效', ApiErrorCode.USER_ID_INVALID, HttpStatus.BAD_REQUEST);
    }
    return await this.countryService.getCountry(id);
  }
}
