import { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Label } from './ui/label'
import { useTaskStore } from '@/app/store/taskStore'
import { TaskCardSkeleton } from './ui/taskSkeleton'
import { AlertMessage } from './ui/AlertMessage'

const CreatedTask = () => {
  const {tasks, loadTasks, updateTask, isLoading, error} = useTaskStore()
  useEffect(() => {
    loadTasks()
  },[])

  if(isLoading) return <TaskCardSkeleton/>

  if(error) return AlertMessage(error)

  if(!tasks || tasks.length === 0) {
    return <Label data-testid="cypress-no-task-message">No ToDo's yet. Create one above!</Label>
  }
  
  return (
    <>
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
              <CardTitle data-testid="cypress-added-task-title">{task.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
              <Label data-testid="cypress-added-task-description">{task.description}</Label>
          </CardContent>
          <CardFooter className="flex justify-end">
              <Button data-testid="cypress-done-task-button"
               className="bg-green-600 hover:bg-green-500" onClick={() => updateTask(task.id) }>Done</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default CreatedTask