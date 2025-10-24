import { createTask, fetchTasks, updateTask } from "@/api/taskAPI";
import { create } from "zustand";

export interface Task {
    id: number
    title: string
    description: string
    status: string
}

interface State {
    tasks: Task[],
    title: string
    description: string
    isLoading: boolean
    error: string | null
}

interface Action {
    updateTitle: (title: State['title']) => void
    updateDescription: (description: State['description']) => void
    loadTasks: () => Promise<void>
    addTask: (title: string, description: string) => Promise<void>
    updateTask: (id: number) => Promise<void>
}

export const useTaskStore = create<State&Action>((set) => ({
    tasks: [],
    title: "",
    description: "",
    isLoading: false,
    error: "",
    updateTitle: (title) => set(() => ({title: title})),
    updateDescription: (description) => set(() => ({description: description})),
    loadTasks: async () => {
        set({ isLoading: true, error: null })
        try {
            const tasks = await fetchTasks()
            set({ tasks: tasks, isLoading: false })
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to load tasks',
                isLoading: false
            })
        }
    },
    addTask: async (title, description) => {
        set({ isLoading: true, error: null })
        try {
            const task = await createTask(title, description)
            set((state) => ({ isLoading: false, tasks: [...state.tasks, task]}))
            set({ title: '', description: '' })
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to add task',
                isLoading: false
            })
        }
    },
    updateTask: async(id) => {
        set({ isLoading: true, error: null })
        try {
            set((state) => ({tasks: state.tasks.filter((task) => task.id != id)}))
            const task = await updateTask(id)
            set({ isLoading: false })
        } catch (error) {
            set({
                error: error instanceof Error ? error.message : 'Failed to update tasks',
                isLoading: false
            })
        }
    }
}))
