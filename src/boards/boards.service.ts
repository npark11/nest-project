import { Injectable, NotFoundException } from '@nestjs/common';
// import { BoardStatus } from './board-status.enum';
// import { v1 as uuid } from 'uuid';
// import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`can't find Board with id ${id}`);
    }
    return found;
  }
}
