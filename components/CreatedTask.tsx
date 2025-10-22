import React from 'react'
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
import { Label } from './ui/label'

const CreatedTask = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Task Title</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
            <Label>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate minima illo, sequi dicta accusantium voluptates expedita quos veritatis. Aliquid voluptates quasi eaque voluptatem doloribus dolorum, reiciendis magni repudiandae labore soluta?</Label>
        </CardContent>
        <CardFooter className="flex justify-end">
            <Button className="bg-green-600 hover:bg-green-500">Done</Button>
        </CardFooter>
    </Card>
  )
}

export default CreatedTask