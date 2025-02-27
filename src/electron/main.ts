import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "../utils/util.js";
import BetterSqlite3 from 'better-sqlite3';

import { SubTask, Task } from "../Types/types.js";

let mainWindow: BrowserWindow;
let db: BetterSqlite3.Database;

console.log("🚀 Electron está iniciando...");

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      preload: path.join(app.getAppPath(), "dist-electron/utils/preload.js"),
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
  try {
    const userDataPath = app.getPath("userData");
    console.log("User data path:", userDataPath);
    
    const dbPath = path.join(userDataPath, "database.sqlite");
    console.log("Caminho do banco de dados:", dbPath);
    
    // better-sqlite3 throws an error if there's an issue opening the database
    db = new BetterSqlite3(dbPath);
    console.log("Database connection established successfully");
    
    // Create tables - better-sqlite3 uses exec for running statements without parameters
    db.exec(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        timeSpent INTEGER DEFAULT 0,
        timeOfCreation TEXT NOT NULL,
        isRunning INTEGER DEFAULT 0,
        isCompleted INTEGER DEFAULT 0
      );
      
      CREATE TABLE IF NOT EXISTS subtasks (
        id INTEGER PRIMARY KEY,
        taskId INTEGER NOT NULL,
        name TEXT NOT NULL,
        timeSpent INTEGER DEFAULT 0,
        timeOfCreation TEXT NOT NULL,
        isRunning INTEGER DEFAULT 0,
        isCompleted INTEGER DEFAULT 0,
        FOREIGN KEY (taskId) REFERENCES tasks (id) ON DELETE CASCADE
      );
    `);
    
    console.log("Database tables created successfully");
    
    // Test insert to verify database is working
    const stmt = db.prepare(`INSERT OR IGNORE INTO tasks 
      (id, name, timeSpent, timeOfCreation, isRunning, isCompleted) 
      VALUES (?, ?, ?, ?, ?, ?)`);
    
    const testResult = stmt.run(
      "test-task-id", 
      "Test Task", 
      0, 
      Date.now(), 
      0, 
      0
    );
    
    console.log("Test insert result:", testResult);
    
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Database setup error:", err.message);
  }
}

app.whenReady().then(() => {
  setupDatabase();
  createWindow();

  // Configuring IPC events to communicate with renderer
  ipcMain.handle("add-task", async (_event, task: Task) => {
    try {
      // better-sqlite3 uses prepared statements differently
      const stmt = db.prepare(`
        INSERT INTO tasks (id, name, timeSpent, timeOfCreation, isRunning, isCompleted)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      
      const result = stmt.run(
        task.id, 
        task.name, 
        task.timeSpent, 
        task.timeOfCreation, 
        +task.isRunning, 
        +task.completed
      );
      
      return { success: true, changes: result.changes };
    } catch (error: unknown) {
      const err = error as Error;
      console.error("Erro ao adicionar tarefa:", err.message);
      return { success: false, error: err.message };
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    if (db) db.close();
    app.quit();
  }
});