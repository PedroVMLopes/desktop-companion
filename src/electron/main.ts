import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "../utils/util.js";
import { Database } from "sqlite3";

import { Task, SubTask } from "../pages/Main/Tasks.tsx";

let mainWindow: BrowserWindow;
let db: Database;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "./utils/preload.ts"),
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
  db = new Database(path.join(app.getPath("userData"), "database.sqlite"));

  // Tasks Table
  db.prepare(
    `CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      timeSpent INTEGER DEFAULT 0,
      timeOfCreation INTEGER NOT NULL,
      isRunning INTEGER DEFAULT 0,
      completed INTEGER DEFAULT 0
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
      isRunning INTEGER DEFAULT 0,
      completed INTEGER DEFAULT 0,
      FOREIGN KEY (taskId) REFERENCES tasks (id) ON DELETE CASCADE
    )`
  ).run();
}

app.whenReady().then(() => {
  setupDatabase();
  createWindow();

  // Configuring IPC events to comunicate with renderer
  ipcMain.handle("add-task", (_event, task: Task) => {
    const stmt = db.prepare(`
      INSERT INTO tasks (id, name, timeSpent, timeOfCreation, isRunning, completed)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    stmt.run(task.id, task.name, task.timeSpent, task.timeOfCreation, +task.isRunning, +task.completed);
    return { success: true };
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
