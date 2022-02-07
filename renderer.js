const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const customTitlebar = require('custom-electron-titlebar');

var titlebar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#444')
});
// eslint-disable-next-line no-undef
titlebar.updateBackground(new Color(new RGBA(0, 0, 0, .7)));

const template = [

    {
        label: 'File',
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
    }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

titlebar.updateMenu(menu);
titlebar.updateMenuPosition('bottom');