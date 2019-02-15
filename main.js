const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  // create  browser Window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/img/gear.png"
  });

  // load index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slash: true
    })
  );

  // Open developer tools
  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

// run create window fxn
app.on("ready", createWindow);

// quit when all windows are closed

app.on("window-all-closed,", () => {
  // win32 is windows
  if (process.platform !== "darwin") {
    app.quit();
  }
});
