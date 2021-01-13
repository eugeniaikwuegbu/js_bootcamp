'use strict'

// Read existing notes from localStorage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    try{
        return notesJSON ? JSON.parse(notesJSON) :  []
    }catch(e){
        return []
    }
}

// Save the notes to localStorage
const saveNotes =  (notes) => localStorage.setItem('notes', JSON.stringify(notes))

// Remove a note from the list
const removeNote = function (id) {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note
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

//sorting notes by last created
const sortItemsBy = (notes, sortBy) => {
    if(sortBy === 'byEdited'){
        return notes.sort((a,b) => {
            if(a.updatedAt > b.updatedAt){
                return -1
            }else if(a.updatedAt < b.updatedAt){
                return 1
            }else{
                return 0
            }
        })
    }else if(sortBy === 'byCreated'){
        return notes.sort((a,b) => {
            if(a.createdAt > b.createdAt){
                return -1
            }else if(a.createdAt < b.createdAt){
                return 1
            }else{
                return 0
            }
        })
    }else if (sortBy === 'alphabetical'){
        return notes.sort((a,b) => {
            a = a.title.toLowerCase()
            b = b.title.toLowerCase()
          if(a < b){
              return -1
          }else if (a > b){
              return 1
          }else{
              return 0
            }
        })
    } 
}

// Render application notes
const renderNotes = (notes, filters) => {
    const notesElement = document.querySelector('#notes')
    notes = sortItemsBy(notes, filters.sortBy)
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

//Generating timestamp
const getLastEdited = (timestamp)=> `Last edited ${moment(timestamp).fromNow()}`
