import { TypeOrmCrudService } from '@dataui/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { Category } from '@/categories/categories.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class CategoriesService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) repo: Repository<Category>) {
    super(repo)
  }
}
