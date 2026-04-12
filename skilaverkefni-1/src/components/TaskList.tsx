import { useState, useMemo } from 'react'
import { useAppStore } from '@/store/useAppStore'
import { TaskCard } from '@/components/TaskCard'
import { TaskForm } from '@/components/TaskForm'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import type { Task } from '@/types'

interface Props {
  projectId: string
  projectName: string
}

export function TaskList({ projectId, projectName }: Props) {
  const allTasks = useAppStore((s) => s.tasks)
  const tasks = useMemo(() => allTasks.filter((t) => t.projectId === projectId), [allTasks, projectId])
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const handleEdit = (task: Task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const handleClose = () => {
    setShowForm(false)
    setEditingTask(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{projectName}</h2>
        <Button size="sm" onClick={() => setShowForm(true)}>+ New Task</Button>
      </div>

      {tasks.length === 0 && (
        <p className="text-gray-500 text-sm">No tasks yet. Create one!</p>
      )}

      <div className="flex flex-col gap-3">
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} onEdit={handleEdit} />
        ))}
      </div>

      <Dialog open={showForm} onOpenChange={(open) => { if (!open) handleClose() }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingTask ? 'Edit Task' : 'New Task'}</DialogTitle>
          </DialogHeader>
          <TaskForm
            projectId={projectId}
            onClose={handleClose}
            existingTask={editingTask ?? undefined}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}