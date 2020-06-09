const notes = require('./notes')
const yargs = require('yargs')

yargs.version('1.0.1')

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: "string"
        },
        description: {
            describe: 'Note Description',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.description)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a Note',
    builder: {
        title: {
            describe: 'Title of the Note to be deleted',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the Notes',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Display a specific Note',
    builder: {
        title: {
            describe: 'Title of the Note to be displayed',
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()