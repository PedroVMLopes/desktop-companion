import { SubTask, Task } from "./src/Types/types";
import { contextBridge, ipcRenderer, IpcRendererEvent  } from 'electron';

interface MediaInfo {
  title: string;
  artist?: string;
  isPlaying: boolean;
}

type MediaInfoCallback = (event: IpcRendererEvent, info: MediaInfo) => void;


// Functions available on front-end:
contextBridge.exposeInMainWorld("electronAPI", {
  addTask: (task: Task) => ipcRenderer.invoke("add-task", task),
  getAllTasks: () => ipcRenderer.invoke("get-all-tasks"),
  getTask: (taskId: string) => ipcRenderer.invoke("get-task", taskId),
  addSubTask: (subTask: SubTask, taskId: string) => ipcRenderer.invoke("app-subtask", subTask, taskId),

  requestMediaInfo: () => ipcRenderer.send('request-media-info'),
  onMediaInfoUpdate: (callback: MediaInfoCallback) => {
    const subscription = (_event: IpcRendererEvent, info: MediaInfo) => callback(_event, info);
    ipcRenderer.on('media-info-update', subscription);
    return () => {
      ipcRenderer.removeListener('media-info-update', subscription);
    };
  },
  playPause: () => ipcRenderer.send('media-play-pause'),
  next: () => ipcRenderer.send('media-next'),
  previous: () => ipcRenderer.send('media-previous')
});
