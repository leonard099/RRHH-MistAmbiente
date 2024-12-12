import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import typeorm from '../config/typeORM.config';
import { AppService } from './app.service';
import { NominaModule } from './Nomina/nomina.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const config = configService.get('typeorm');
        return config;
      }    
    }),
    NominaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
