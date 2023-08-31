import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get('/')
  getAllBoards() {
    return this.boardsService.getAllboards();
  }

  @Post()
  createBoard(@Body('title') title: string, @Body('desc') desc: string): Board {
    return this.boardsService.createBoard(title, desc);
  }
}
