import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProjectsService } from './projects.service';
import { ProjectDto } from '../dtos';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'List projects' })
  @ApiResponse({ status: 200, type: [ProjectDto] })
  async listProjects() {
    return this.projectsService.listProjects();
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete project' })
  @ApiResponse({ status: 204 })
  async deleteProject(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }
}
