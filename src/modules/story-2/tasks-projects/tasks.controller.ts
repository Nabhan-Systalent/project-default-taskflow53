import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, TaskResponseDto } from './dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ApiResponse({ type: [TaskResponseDto] })
  listTasks(): TaskResponseDto[] {
    return this.tasksService.findAll();
  }

  @Post()
  @ApiResponse({ type: TaskResponseDto, status: 201 })
  createTask(@Body() createTaskDto: CreateTaskDto): TaskResponseDto {
    return this.tasksService.create(createTaskDto);
  }
}
