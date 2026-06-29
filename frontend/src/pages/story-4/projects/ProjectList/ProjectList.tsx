import React from 'react';
import { ProjectListProps } from './ProjectList.types';

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  isLoading,
  error,
  onProjectClick,
  onCreateProject,
}) => {
  if (isLoading) {
    return (
      <div className="p-8 text-center text-[var(--color-text-secondary)]">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-[var(--color-error)]">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Projects</h1>
        <button
          onClick={onCreateProject}
          className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-white)] rounded-lg hover:opacity-90 transition-opacity"
        >
          Create Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="py-20 text-center border-2 border-dashed border-[var(--color-border)] rounded-lg">
          <p className="text-[var(--color-text-secondary)]">No projects found. Create your first one!</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onProjectClick(project.id)}
              className="p-4 border border-[var(--color-border)] rounded-lg cursor-pointer hover:bg-[var(--color-background-hover)] transition-colors"
            >
              <h3 className="font-semibold text-[var(--color-text-primary)]">{project.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">{project.description}</p>
              <span className="text-xs text-[var(--color-text-muted)] mt-2 block">
                Updated: {new Date(project.updatedAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
