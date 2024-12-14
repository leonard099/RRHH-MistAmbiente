import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import typeorm from '../config/typeORM.config';
import { AppService } from './app.service';
import { NominaModule } from './Nomina/nomina.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroModule } from './Registros/registro.module';

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
    NominaModule,RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
