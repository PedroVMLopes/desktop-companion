import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "../utils/util.js";
import { Database } from "sqlite3";

import { SubTask, Task } from "../Types/types.ts";

let mainWindow: BrowserWindow;
let db: Database;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "./utils/preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
}

function setupDatabase() {
  db = new Database(path.join(app.getPath("userData"), "database.sqlite"), (err) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    }
  });

  // Tasks Table
  db.prepare(
    `CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      timeSpent INTEGER DEFAULT 0,
      timeOfCreation INTEGER NOT NULL,
      isRunning BOOLEAN DEFAULT 0,
      completed BOOLEAN DEFAULT 0
    )`
  ).run();

  // Sub-tasks Table
  db.prepare(
    `CREATE TABLE IF NOT EXISTS subtasks (
      id TEXT PRIMARY KEY,
      taskId TEXT NOT NULL,
      name TEXT NOT NULL,
      timeSpent INTEGER DEFAULT 0,
      timeOfCreation INTEGER NOT NULL,
      isRunning BOOLEAN DEFAULT 0,
      completed BOOLEAN DEFAULT 0,
      FOREIGN KEY (taskId) REFERENCES tasks (id) ON DELETE CASCADE
    )`
  ).run();
}

app.whenReady().then(() => {
  setupDatabase();
  createWindow();

  // Configuring IPC events to comunicate with renderer
  ipcMain.handle("add-task", async (_event, task: Task) => {
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO tasks (id, name, timeSpent, timeOfCreation, isRunning, completed)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [task.id, task.name, task.timeSpent, task.timeOfCreation, +task.isRunning, +task.completed],
        (err) => {
          if (err) {
            console.error("Erro ao adicionar tarefa:", err.message);
            reject({ success: false, error: err.message });
          } else {
            resolve({ success: true });
          }
        }
      );
    });
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    db.close();
    app.quit();
  }
});
