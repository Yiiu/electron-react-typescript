import { app, BrowserWindow, Event, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow | null;

function isDev() {
  return process.env.NODE_ENV === 'development';
}

const createWindow = async () => {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    center: true,
    show: false,
    backgroundColor: '#282c34'
  });

  win.once('ready-to-show', () => {
    win!.show();
  });

  if (isDev()) {
    win.webContents.openDevTools();
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';
    win.loadURL('http://localhost:3000');
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../.reslow/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.on('closed', () => {
    win = null;
  });
};

ipcMain.on('synchronous-minimize', (event: Event) => {
  win!.minimize();
  event.returnValue = true;
});
ipcMain.on('synchronous-close', (event: Event) => {
  win!.close();
  event.returnValue = true;
});

app.on('ready', createWindow);
