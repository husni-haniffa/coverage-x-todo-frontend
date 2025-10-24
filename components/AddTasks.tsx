import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { useTaskStore } from "@/app/store/taskStore"
import { Spinner } from "./ui/spinner"

const AddTasks = () => {

  const {title, description, updateTitle, updateDescription, addTask, isLoading} = useTaskStore()

  return (
    <Card>
        <CardHeader>
            <CardTitle data-testid="cypress-add-a-task-title">Add a Task</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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
        <CardFooter className="flex justify-end">
            <Button 
              className="bg-purple-600 hover:bg-purple-700" 
              onClick={() => addTask(title, description)}
              data-testid="cypress-add-task-button"
              disabled={isLoading}
              >
                {isLoading ? <Spinner /> : "Add"}
              </Button>
        </CardFooter>
    </Card>
  )
}

export default AddTasks