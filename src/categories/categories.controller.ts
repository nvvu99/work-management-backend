import { Crud, CrudController } from '@dataui/crud'
import { Controller } from '@nestjs/common'
import { Category } from '@/categories/categories.entity'
import { CategoriesService } from '@/categories/categories.service'

@Crud({
  model: {
    type: Category,
  },
})
@Controller('categories')
export class CategoriesController implements CrudController<Category> {
  constructor(public service: CategoriesService) {}
}
