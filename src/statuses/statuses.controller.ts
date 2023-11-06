import { Crud, CrudController } from '@dataui/crud'
import { Controller } from '@nestjs/common'
import { Status } from '@/statuses/statuses.entity'
import { StatusesService } from '@/statuses/statuses.service'

@Crud({
  model: {
    type: Status,
  },
})
@Controller('statuses')
export class StatusesController implements CrudController<Status> {
  constructor(public service: StatusesService) {}
}
