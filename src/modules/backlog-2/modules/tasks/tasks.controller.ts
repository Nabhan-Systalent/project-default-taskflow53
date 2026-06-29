import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { TaskDto, CreateTaskDto } from '../dtos';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiOperation({ summary: 'Get workspace tasks' })
  @ApiResponse({ status: 200, type: [TaskDto] })
  async listTasks() {
    return this.tasksService.listTasks();
  }

  @Post()
  @ApiOperation({ summary: 'Create new task' })
  @ApiResponse({ status: 201, type: TaskDto })
  async createTask(@Body() body: CreateTaskDto) {
    return this.tasksService.createTask(body);
  }
}
