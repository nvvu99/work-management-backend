import { Module } from '@nestjs/common'
import { TasksController } from '@/tasks/tasks.controller'
import { TasksService } from '@/tasks/tasks.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Task } from '@/tasks/tasks.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
