import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { Task } from '@/tasks/tasks.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class TasksService extends TypeOrmCrudService<Task> {
  constructor(@InjectRepository(Task) repo: Repository<Task>) {
    super(repo)
  }
}
