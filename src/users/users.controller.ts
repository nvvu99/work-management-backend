import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { User } from '@/users/users.entity'
import { UsersService } from '@/users/users.service'

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
