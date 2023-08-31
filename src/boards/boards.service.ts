import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllboards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, desc: string): Board {
    const board: Board = {
      id: uuid(),
      title,
      desc,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
