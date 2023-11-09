import { Category } from '@/categories/categories.entity'
import { Priority } from '@/priorities/priorities.entity'
import { Status } from '@/statuses/statuses.entity'
import { User } from '@/users/users.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({
    name: 'completion_percentage',
    type: 'tinyint',
    unsigned: true,
    default: 0,
  })
  completionPercentage: number

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(() => Status, (status) => status.tasks)
  @JoinColumn({ name: 'status_id' })
  status: Status

  @ManyToOne(() => Category, (category) => category.tasks)
  @JoinColumn({ name: 'category_id' })
  category: Category

  @ManyToOne(() => Priority, (priority) => priority.tasks)
  @JoinColumn({ name: 'priority_id' })
  priority: Priority

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date
}
