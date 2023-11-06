import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { Status } from '@/statuses/statuses.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class StatusesService extends TypeOrmCrudService<Status> {
  constructor(@InjectRepository(Status) repo: Repository<Status>) {
    super(repo)
  }
}
