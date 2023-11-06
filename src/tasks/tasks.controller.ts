import { Crud, CrudController } from '@dataui/crud'
import { Controller } from '@nestjs/common'
import { Task } from '@/tasks/tasks.entity'
import { TasksService } from '@/tasks/tasks.service'

@Crud({
  model: {
    type: Task,
  },
})
@Controller('tasks')
export class TasksController implements CrudController<Task> {
  constructor(public service: TasksService) {}
}
