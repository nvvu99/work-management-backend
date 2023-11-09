import { Module } from '@nestjs/common'
import { AppController } from '@/app.controller'
import { AppService } from '@/app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import database from 'config/database'
import { DataSourceOptions } from 'typeorm'
import { TasksModule } from './tasks/tasks.module'
import { StatusesModule } from './statuses/statuses.module'
import { CategoriesModule } from './categories/categories.module'
import { PrioritiesModule } from './priorities/priorities.module'

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
    StatusesModule,
    CategoriesModule,
    PrioritiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
