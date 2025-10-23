import { Task } from "@/app/store/taskStore";

const BASE_URL = "http://localhost:8080/api/tasks"

export async function createTask(title: string, description: string): Promise<Task> {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: { "Content-Type": "application/json" },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function fetchTasks(): Promise<Task[]> {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET',
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function updateTask(id: number): Promise<Task> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}