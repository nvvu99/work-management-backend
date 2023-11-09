import { Crud, CrudController } from '@dataui/crud'
import { Controller } from '@nestjs/common'
import { Priority } from '@/priorities/priorities.entity'
import { PrioritiesService } from '@/priorities/priorities.service'

@Crud({
  model: {
    type: Priority,
  },
})
@Controller('priorities')
export class PrioritiesController implements CrudController<Priority> {
  constructor(public service: PrioritiesService) {}
}
