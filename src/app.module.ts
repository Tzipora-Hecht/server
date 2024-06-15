import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { DatabaseModule } from './database/database.module';
import { Professional } from './entities/professional'
import { ProfessionalService } from './services/professional.service';
import { ProfessionalController } from './controllers/professional.controller';
import { distinct } from 'rxjs';



@Module({
  // imports:[
  //      DatabaseModule,
  //     TypeOrmModule.forFeature([Professional]), 
  //    ],
    imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0583264489',
      database: 'postgres',
      // entities: ["../dist/**/*.entity{.ts,.js}"],
      // entities: [],
      // entities: ['dist/src/entities/professional'],
      entities: [Professional],

      // entities: ["dist/,,,**/*.entity{.ts,.js}"],
    

      synchronize: true,
    }),
    TypeOrmModule.forFeature([Professional])
  ],
  controllers: [AppController,ProfessionalController],
  providers: [AppService,ProfessionalService],
})


export class AppModule {}


// src/app.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { DatabaseModule } from './database/database.module';
// import { User } from './user/user.entity'; // Import your entity classes

// @Module({
//   imports: [
//     DatabaseModule,
//     TypeOrmModule.forFeature([User]), // Include your entity classes here
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// app.module.tsJS

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'test',
//       entities: [],
//       synchronize: true,
//     }),
//   ],
// })
// export class AppModule {}
