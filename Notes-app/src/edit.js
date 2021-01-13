import{initializeEditPage, getLastEdited} from './views'
import{updateNote, removeNote} from './notes'

const span = document.querySelector('#last-edited')
let div1 = document.querySelector('#note-title')
const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const noteId = location.hash.substring(1)

initializeEditPage(noteId)


titleEl.addEventListener('input', (e) => {
    const note = updateNote(noteId,{
        title : e.target.value,
    })
    span.textContent = getLastEdited(note.updatedAt)
})

bodyEl.addEventListener('input', (e) => {
    const note = updateNote(noteId,{
        body: e.target.value
    })
    span.textContent = getLastEdited(note.updatedAt)
})

document.querySelector('#remove-note').addEventListener('click', () => {
    removeNote(noteId)
    location.assign('./index.html')
    
})

window.addEventListener('storage', (e)=> {
    if(e.key === 'notes'){
        initializeEditPage(noteId)
    }
    getLastEdited(note.updatedAt)
})





