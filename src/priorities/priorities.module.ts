import { Module } from '@nestjs/common'
import { PrioritiesController } from '@/priorities/priorities.controller'
import { PrioritiesService } from '@/priorities/priorities.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Priority } from '@/priorities/priorities.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Priority])],
  exports: [PrioritiesService],
  controllers: [PrioritiesController],
  providers: [PrioritiesService],
})
export class PrioritiesModule {}
