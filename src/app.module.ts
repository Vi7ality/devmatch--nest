import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [ProfilesModule, ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
