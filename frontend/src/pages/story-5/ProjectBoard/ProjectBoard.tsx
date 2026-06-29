'use client';

import { useState } from 'react';
import { ProjectBoardProps, Task } from './ProjectBoard.types';

export const ProjectBoard = ({ initialTasks }: ProjectBoardProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const columns: { id: Task['status']; label: string }[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ];

  return (
    <div className="flex gap-6 p-6 min-h-screen bg-[var(--color-background)]">
      {columns.map((column) => (
        <div
          key={column.id}
          className="flex-1 bg-[var(--color-surface)] rounded-lg p-4 border border-[var(--color-border)]"
        >
          <h2 className="font-semibold text-lg mb-4 text-[var(--color-text-primary)]">
            {column.label}
          </h2>
          <div className="space-y-3">
            {tasks
              .filter((t) => t.status === column.id)
              .map((task) => (
                <div
                  key={task.id}
                  className="p-4 bg-[var(--color-background)] border border-[var(--color-border)] rounded shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-[var(--color-text-primary)]">{task.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2">
                    {task.description}
                  </p>
                  <div className="flex gap-2 mt-3">
                    {columns.map((c) => (
                      <button
                        key={c.id}
                        disabled={c.id === task.status}
                        onClick={() => moveTask(task.id, c.id)}
                        className="text-xs px-2 py-1 rounded bg-[var(--color-primary)] text-[var(--color-white)] disabled:opacity-50"
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
