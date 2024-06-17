import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Professional } from './professional/professional'
import { ProfessionalService } from './professional/professional.service';
import { ProfessionalController } from './professional/professional.controller';
import { distinct } from 'rxjs';
require('dotenv').config();


@Module({

    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) ,
      database: process.env.DB_DATABASE,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [Professional],

    

      synchronize: true,
    }),
    TypeOrmModule.forFeature([Professional])
  ],
  controllers: [AppController,ProfessionalController],
  providers: [AppService,ProfessionalService],
})


export class AppModule {}


