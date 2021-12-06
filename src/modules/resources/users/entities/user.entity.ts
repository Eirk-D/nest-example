import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Todo } from '../../todos/entities/todo.entity';
@Entity()
export class User {
  @ApiProperty({ description: '自增 id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '标题' })
  @Column({ length: 500 })
  username: string;

  @ApiProperty({ description: '密码' })
  @Exclude()
  @Column({ length: 500 })
  password: string;

  @ApiProperty({ description: '邮箱' })
  @Column({ length: 500 })
  email: string;

  @ApiProperty({ description: '是否为管理员' })
  @Column('int', { default: 1 })
  is_admin?: number;

  @OneToMany(() => Todo, (todo) => todo.author, { cascade: true })
  todos: Todo[];
}
