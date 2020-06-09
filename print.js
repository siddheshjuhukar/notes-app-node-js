const chalk = require('chalk')

const printMsg = function(message) {
    console.log(chalk.green.bold(message))
}

const printErr = function(message) {
    console.log(chalk.red.bold(message))
}

const printList = function(message) {
    console.log(chalk.blue.bold(message))
}

module.exports = {
    printMsg: printMsg,
    printErr: printErr,
    printList: printList
}