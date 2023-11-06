import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Status } from '@/statuses/statuses.entity'
import { StatusesController } from '@/statuses/statuses.controller'
import { StatusesService } from '@/statuses/statuses.service'

@Module({
  imports: [TypeOrmModule.forFeature([Status])],
  exports: [StatusesService],
  controllers: [StatusesController],
  providers: [StatusesService],
})
export class StatusesModule {}
