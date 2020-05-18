import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
// 自定义全局的异常处理
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
// 自定义全局的接收数据的验证
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 设置全局异常处理
  app.useGlobalFilters(new HttpExceptionFilter());
  // 设置全局参数验证
  app.useGlobalPipes(new ApiParamsValidationPipe());
  //配置静态资源
  //app.useStaticAssets(join(__dirname,'..','public'))

  //如下方式也可以，因为默认nest会去寻找根目录下面的参数一文件夹
  app.useStaticAssets('public', {
    prefix: '/public/'
  })
  await app.listen(3000);
}
bootstrap();
