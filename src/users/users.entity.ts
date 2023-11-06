import { Task } from '@/tasks/tasks.entity'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ nullable: true })
  avatar: string

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date
}
