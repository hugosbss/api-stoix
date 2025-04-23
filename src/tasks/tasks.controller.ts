import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CriarTaskDto } from './dto/criarTask.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async criarTask(@Body() dto: CriarTaskDto) {
    return this.tasksService.criarTask(dto);
  }

  @Get()
  async listarTasks() {
    return this.tasksService.listarTasks();
  }

  @Put(':id')
  async atualizarTask(@Param('id') id: number, @Body() dto: CriarTaskDto) {
    return this.tasksService.atualizarTask(id, dto);
  }

  @Delete(':id')
  async deletarTask(@Param('id') id: number) {
    return this.tasksService.deletarTask(id);
  }
}