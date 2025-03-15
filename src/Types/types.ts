import { IpcRendererEvent } from "electron";

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

interface MediaInfo {
    title: string;
    artist?: string,
    isPlaying: boolean;
}

declare global {
    interface Window {
        electronAPI: {
            requestMediaInfo: () => void;
            onMediaInfoUpdate: (callback: (event: IpcRendererEvent, info: MediaInfo) => void) => () => void;
            playPouse: () => void;
            next: () => void;
            previous: () => void;
        }
    }
}

export {};