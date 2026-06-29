import { Injectable } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from '../dtos';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [{ id: '1', title: 'Task 1' }];

  async listTasks(): Promise<TaskDto[]> {
    return this.tasks;
  }

  async createTask(data: CreateTaskDto): Promise<TaskDto> {
    const newTask = { id: Math.random().toString(36), ...data };
    this.tasks.push(newTask);
    return newTask;
  }
}
