// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const Remote = require('@electron/remote/main')
const path = require('path')
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            enableRemoteModule: true,
            nodeIntegration: true,
        }
    })
    console.log(url.format(path.join(__dirname, '/images', '/icon.png')))

    // bootstrap remote
    // Remote.initialize()

    const menu = Menu.buildFromTemplate(exampleMenuTemplate());
    Menu.setApplicationMenu(menu);

    // and load the index.html of the app.
    mainWindow.loadURL('http://localhost:3000')

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function() {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const exampleMenuTemplate = () => [{
        label: 'File',
        submenu: [{
                label: 'New Repository',
            },
            {
                label: 'Craete Repository'
            },
            {
                type: 'separator'
            },
            {
                label: 'open Repository'
            },
            {
                role: 'close'
            },
        ]
    },
    {
        label: 'Edit',
        submenu: [{
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            }
        ]
    },

    {
        label: 'View',
        submenu: [{
                role: 'reload'
            },
            {
                role: 'toggledevtools'
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },

    {
        role: 'window',
        submenu: [{
                role: 'minimize'
            },
            {
                role: 'close'
            }
        ]
    },

    {
        role: 'help',
        submenu: [{
            label: 'Learn More'
        }]
    },
];