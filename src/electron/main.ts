import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { isDev } from "../utils/util.js";

import { SubTask, Task } from "../Types/types.js";
import { MediaPlayer } from "../utils/MediaPlayer.cjs";

let mainWindow: BrowserWindow;
let mediaPlayer: MediaPlayer;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 900,
    webPreferences: {
      preload: path.join(app.getAppPath(), "preload.js"),
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


app.whenReady().then(() => {
  createWindow();

  mediaPlayer = new MediaPlayer();

  setInterval(() => {
    if (mainWindow) {
      const mediaInfo = mediaPlayer.getMediaInfo();
      mainWindow.webContents.send('media-info-update', mediaInfo);
    }
  }, 1000);

  setupIpcHandlers();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});


function setupIpcHandlers() {
  ipcMain.on('request-media-info', (event) => {
    if (mediaPlayer) {
      event.reply('media-info-update', mediaPlayer.getMediaInfo());
    }
  });

  ipcMain.on('media-play-pause', () => {
    mediaPlayer.playPause();
  });

  ipcMain.on('media-next', () => {
    mediaPlayer.next();
  });

  ipcMain.on('media-previous', () => {
    mediaPlayer.previous();
  })
}


app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});