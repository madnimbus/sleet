const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow	//Use an array for multiple windows

function closed() {
	mainWindow = null
}

function allClosed() {
	if (process.platform !== 'darwin') {
		app.quit()
	}
}

function activate() {
	if (mainWindow === null) {
		createWindow()
	}
}

function createWindow () {
	mainWindow = new BrowserWindow({width: 800, height: 600})

	mainWindow.loadURL(`file://${__dirname}/index.html`)
	mainWindow.webContents.openDevTools()
	mainWindow.on('closed', closed)

	//require as necessary
}

app.on('ready', createWindow)

app.on('window-all-closed', allClosed)

app.on('activate', activate)
