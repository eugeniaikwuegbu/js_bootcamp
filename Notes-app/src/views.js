import moment from 'moment'
import{getFilters} from './filters'
import {sortItemsBy,getNotes } from './notes.js'

const generateNoteDOM =  (note) => {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')


    // Setup the note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)
    

    //setup the link
    noteEl.setAttribute('href', `./edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    //setup status message
    statusEl.textContent = getLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl) 
    return noteEl
}

const renderNotes = () => {
    const notesElement = document.querySelector('#notes')
    const filters = getFilters()
    const notes = sortItemsBy(filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    
    notesElement.innerHTML = ''

    if(filteredNotes.length > 0){
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDOM(note)
            notesElement.appendChild(noteEl)
        })
    }else{
        const paragraph = document.createElement('p')
        paragraph.textContent = 'No notes to show'
        notesElement.classList.add('empty-message')
        notesElement.appendChild(paragraph)
        
    }


}

const initializeEditPage = (noteId) =>{
const span = document.querySelector('#last-edited')
let div1 = document.querySelector('#note-title')
const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')

    const notes = getNotes()
    const note = notes.find((note) => note.id === noteId)
    
    if(!note){
        location.assign('./index.html')
    }
    
    titleEl.value = note.title
    bodyEl.value = note.body
    span.textContent = getLastEdited(note.updatedAt)
}

//Generating timestamp
const getLastEdited = (timestamp)=> `Last edited ${moment(timestamp).fromNow()}`


export{ generateNoteDOM, renderNotes, getLastEdited, initializeEditPage}