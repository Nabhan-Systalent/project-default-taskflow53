import { Injectable } from '@nestjs/common';
import { ProjectDto } from '../dtos';

@Injectable()
export class ProjectsService {
  private projects: ProjectDto[] = [{ id: '1', name: 'Project Alpha' }];

  async listProjects(): Promise<ProjectDto[]> {
    return this.projects;
  }

  async deleteProject(id: string): Promise<void> {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
