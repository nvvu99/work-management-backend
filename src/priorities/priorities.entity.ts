import { Task } from '@/tasks/tasks.entity'
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'priorities' })
export class Priority {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: number

  @OneToMany(() => Task, (task) => task.priority)
  tasks: Task

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date
}
