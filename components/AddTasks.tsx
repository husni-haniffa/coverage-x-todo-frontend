import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { useTaskStore } from "@/app/store/taskStore"
import { Spinner } from "./ui/spinner"
import { AlertMessage } from "./ui/AlertMessage"

const AddTasks = () => {

  const {title, description, updateTitle, updateDescription, addTask, isAddTaskLoading, addError} = useTaskStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addTask(title, description)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader className="space-y-2">
          <CardTitle data-testid="cypress-add-a-task-title">Add a Task</CardTitle>
          {addError ? AlertMessage(addError) : ""}
        </CardHeader>
        <CardContent className="space-y-6 mt-4">
            <Input 
              placeholder="Title" value={title} 
              onChange={(e) => updateTitle(e.currentTarget.value)}
              data-testid="cypress-add-title-input"
              required
            />
            <Textarea 
              required
              placeholder="Description" 
              value={description} 
              onChange={(e) => updateDescription(e.currentTarget.value)}
              data-testid="cypress-add-description-textarea"/>
        </CardContent>
        <CardFooter className="flex justify-end mt-5">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700" 
              data-testid="cypress-add-task-button"
              disabled={isAddTaskLoading}
              >
                {isAddTaskLoading ? <Spinner /> : "Add"}
              </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default AddTasks