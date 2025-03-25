"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
// Functions available on front-end:
electron_1.contextBridge.exposeInMainWorld("electronAPI", {
    addTask: function (task) { return electron_1.ipcRenderer.invoke("add-task", task); },
    getAllTasks: function () { return electron_1.ipcRenderer.invoke("get-all-tasks"); },
    getTask: function (taskId) { return electron_1.ipcRenderer.invoke("get-task", taskId); },
    addSubTask: function (subTask, taskId) { return electron_1.ipcRenderer.invoke("app-subtask", subTask, taskId); },
    requestMediaInfo: function () { return electron_1.ipcRenderer.send('request-media-info'); },
    onMediaInfoUpdate: function (callback) {
        var subscription = function (_event, info) { return callback(_event, info); };
        electron_1.ipcRenderer.on('media-info-update', subscription);
        return function () {
            electron_1.ipcRenderer.removeListener('media-info-update', subscription);
        };
    },
    playPause: function () { return electron_1.ipcRenderer.send('media-play-pause'); },
    next: function () { return electron_1.ipcRenderer.send('media-next'); },
    previous: function () { return electron_1.ipcRenderer.send('media-previous'); }
});
