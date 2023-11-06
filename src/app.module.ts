import { Module } from '@nestjs/common'
import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import database from 'config/database'
import { DataSourceOptions } from 'typeorm'
import { TasksModule } from './tasks/tasks.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [database],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get<DataSourceOptions>('database'),
    }),
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
