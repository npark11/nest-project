import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enum';

export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  status: BoardStatus;
}
