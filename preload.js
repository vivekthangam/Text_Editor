const path = require('path');
const url = require('url');

const customTitlebar = require('custom-electron-titlebar');
console.log(url.format(path.join(__dirname, '/images', '/icon.png')))
window.addEventListener('DOMContentLoaded', () => {
    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex('#2f3241'),
        icon: url.format(path.join(__dirname, '/images', '/icon.png')),
    });

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})