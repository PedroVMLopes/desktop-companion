import { Task, SubTask } from "../pages/Main/Tasks";

const { contextBridge, ipcRenderer } = require("electron");

// Functions available on front-end:
contextBridge.exposeInMainWorld("api", {
  addTask: (task: Task) => ipcRenderer.invoke("add-task", task),
  getAllTasks: () => ipcRenderer.invoke("get-all-tasks"),
  getTask: (taskId: string) => ipcRenderer.invoke("get-task", taskId),
  addSubTask: (subTask: SubTask, taskId: string) => ipcRenderer.invoke("app-subtask", subTask, taskId),
});
