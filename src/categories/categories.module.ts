import { Module } from '@nestjs/common'
import { CategoriesController } from '@/categories/categories.controller'
import { CategoriesService } from '@/categories/categories.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from '@/categories/categories.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  exports: [CategoriesService],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
