'use strict'

const path = require('path')
var menubar = require('menubar')

//Define menubar location. 
var mb = menubar({'index': path.join('file://', __dirname, '/index.html')})

//Initiate menubar. 
mb.on('ready', function ready() {
  console.log('app is ready')
})

//Define stylistic menubar options. 
mb.setOption('width', 350) //Set fixed width. 
mb.setOption('height', 450) //Set fixed height.
mb.setOption('resizable', false) //Disable window resizing to prevent anti-responsiveness. 
