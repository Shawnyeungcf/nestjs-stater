import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino'; // Help logs the incoming request in terminal.
import { AdminModule } from '@adminjs/nestjs';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    LoggerModule.forRoot(),
    AdminModule.createAdmin({
      adminJsOptions: { rootPath: '/admin', resources: [] },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
