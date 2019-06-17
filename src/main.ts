import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 自定义全局的异常处理
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// 自定义全局的接收数据的验证
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局异常处理
  app.useGlobalFilters(new HttpExceptionFilter());
  // 设置全局参数验证
  app.useGlobalPipes(new ApiParamsValidationPipe());
  await app.listen(3000);
}
bootstrap();
