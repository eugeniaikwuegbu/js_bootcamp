'use strict'

const span = document.querySelector('#last-edited')
let div1 = document.querySelector('#note-title')

const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if(!note){
    location.assign('./index.html')
}

titleEl.value = note.title
bodyEl.value = note.body
span.textContent = getLastEdited(note.updatedAt)



titleEl.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment()
    span.textContent = getLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment()
    span.textContent = getLastEdited(note.updatedAt)
    saveNotes(notes)
})

document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('./index.html')
    
})

window.addEventListener('storage', (e)=> {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)   

        if(!note){
            location.assign('./index.html')
        }    

        titleEl.value = note.title
        bodyEl.value = note.body
        span.textContent = getLastEdited(note.updatedAt)
    }
    getLastEdited(note.updatedAt)
})





