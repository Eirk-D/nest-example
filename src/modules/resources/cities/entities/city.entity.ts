import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @ApiProperty({ description: '自增id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: '名称' })
  @Column({ length: 200 })
  name: string;
}
