import { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Label } from './ui/label'
import { useTaskStore } from '@/app/store/taskStore'
import { TaskCardSkeleton } from './ui/taskSkeleton'
import { AlertMessage } from './ui/AlertMessage'
import { Spinner } from './ui/spinner'
import { RefreshCcw } from 'lucide-react'

const CreatedTask = () => {
  const {tasks, loadTasks, updateTask, isLoading, loadError, updateError, isDoneTaskLoading} = useTaskStore()
  useEffect(() => {
    loadTasks()
  },[loadTasks])

  if(isLoading) return <TaskCardSkeleton/>

  if(loadError) return AlertMessage(loadError)

  if(!tasks || tasks.length === 0) {
    return (
      <div>
        <Label data-testid="cypress-no-task-message">
          No ToDo&apos;s yet. Create one above! <span onClick={loadTasks}><RefreshCcw /></span>
        </Label>
      </div>
    )
  }
  
  return (
    <>
      {tasks.slice(0, 5).map((task) => (
        <Card key={task.id}>
          <CardHeader className='space-y-4'>
              <CardTitle data-testid="cypress-added-task-title">{task.title}</CardTitle>
              {updateError ? AlertMessage(updateError): ""}
          </CardHeader>
          <CardContent className="space-y-6">
              <Label data-testid="cypress-added-task-description">{task.description}</Label>
          </CardContent>
          <CardFooter className="flex justify-end">
              <Button data-testid="cypress-done-task-button"
               className="bg-green-600 hover:bg-green-500" onClick={() => updateTask(task.id) }>{isDoneTaskLoading ? <Spinner /> : "Done"}</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  )
}

export default CreatedTask