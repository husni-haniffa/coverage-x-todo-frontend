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
const AddTasks = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Add a Task</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <Input placeholder="Title"/>
            <Textarea placeholder="Description"/>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-500">Add</Button>
        </CardFooter>
    </Card>
  )
}

export default AddTasks