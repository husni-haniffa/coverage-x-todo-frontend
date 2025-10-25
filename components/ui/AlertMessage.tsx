import { AlertCircleIcon } from "lucide-react"
import {
  Alert,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertMessage(message: string) {
  return (
    <div className="flex max-w-full">
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>{message}</AlertTitle>
      </Alert>
    </div>
  )
}
