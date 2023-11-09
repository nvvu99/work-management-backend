import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { Priority } from '@/priorities/priorities.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class PrioritiesService extends TypeOrmCrudService<Priority> {
  constructor(@InjectRepository(Priority) repo: Repository<Priority>) {
    super(repo)
  }
}
