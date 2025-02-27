export interface SubTask {
    id: string;
    name: string;
    timeSpent: number;
    timeOfCreation: number;
    isRunning: boolean;
    completed: boolean;
}

export interface Task {
    id: string;
    name: string;
    timeSpent: number;
    timeOfCreation: number;
    isRunning: boolean;
    completed: boolean;
    subTasks: SubTask[];
}