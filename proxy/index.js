

const fs = require('fs')
const path = require('path')
const fork = require('child_process').fork

let ls = fork(path.join(__dirname, './start'))
let restarting = false
fs.watch(path.join(__dirname, '../api'), { recursive: true }, (eventType, filename) => {
    if (!restarting) {
        restarting = true
        setTimeout(() => {
            ls.kill()
            ls = fork(path.join(__dirname, './start'))
            restarting = false
        }, 1000)
    }
})
