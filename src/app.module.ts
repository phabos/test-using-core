import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './../node_modules/test-core-api/dist/cat/cat.module';

@Module({
  imports: [CatModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
