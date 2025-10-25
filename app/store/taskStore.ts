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
    isAddTaskLoading: boolean
    isDoneTaskLoading: boolean
    loadError: string | null
    updateError: string | null
    addError: string | null
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
    isAddTaskLoading: false,
    isDoneTaskLoading: false,
    error: "",
    loadError: "",
    updateError: "",
    addError: "",
    updateTitle: (title) => set(() => ({title: title})),
    updateDescription: (description) => set(() => ({description: description})),
    loadTasks: async () => {
        set({ isLoading: true, loadError: null })
        try {
            const tasks = await fetchTasks()
            set({ tasks: tasks, isLoading: false })
        } catch (error) {
            set({
                loadError: error instanceof Error ? error.message : 'Failed to load tasks',
                isLoading: false
            })
        }
    },
    addTask: async (title, description) => {
        set({ isAddTaskLoading: true, addError: null })
        try {
            const task = await createTask(title, description)
            set((state) => ({ isAddTaskLoading: false, tasks: [...state.tasks, task]}))
            set({ title: '', description: '' })
        } catch (error) {
            set({
                addError: error instanceof Error ? error.message : 'Failed to add task',
                isAddTaskLoading: false
            })
        }
    },
    updateTask: async(id) => {
        set({ isDoneTaskLoading: true, updateError: null })
        try {
            set((state) => ({tasks: state.tasks.filter((task) => task.id != id)}))
            await updateTask(id)
            set({ isDoneTaskLoading: false })
        } catch (error) {
            set({
                updateError: error instanceof Error ? error.message : 'Failed to update tasks',
                isDoneTaskLoading: false
            })
        }
    }
}))
