import { ApiProperty } from '@nestjs/swagger';

export class ProjectDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;
}
