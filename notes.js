const fs = require('fs')
const print = require('./print')

const addNote = function( title, body ) {
    const notes = loadNotes ()
    const duplicateNote = notes.find( function(note){
        return note.title === title
    } )

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        print.printMsg('New note added successfully')
    } else {
        print.printErr('Note title taken')
    }
}

const removeNote = function( title ) {
    const notes = loadNotes ()
    const filteredNotes = notes.filter ( function( note ){
        return note.title !== title
    } )
    if( filteredNotes.length === notes.length ){
        print.printErr('Note title not found')
    }else{
        saveNotes(filteredNotes)
        print.printMsg('Note successfully deleted')
    }
}

const listNotes = () => {
    const notes = loadNotes()
    for( note of notes ){
        print.printList(note.title)
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const noteToBeDisplayed = notes.find((note) => note.title === title)
    if(noteToBeDisplayed !== undefined){
        print.printList( noteToBeDisplayed.title )
        console.log(noteToBeDisplayed.body)
    }else{
        print.printErr('Note not found')
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)    
}

const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
