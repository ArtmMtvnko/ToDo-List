import { data } from "./data"
import { folders } from "./folderImplementor"
import { setActiveClass } from "./setActiveClass"
import { addNoteBtn } from "../index"

function saveData() {
    return {
        ...addToStorageImplementor(),
        ...loadSavedDataImplementor()
    }
}

function addToStorageImplementor() {
    return {
        updateData: () => {
            localStorage.removeItem('data')
            
            const dataStorage = JSON.stringify(data)
            localStorage.setItem('data', dataStorage)
        }
    }
}

function loadSavedDataImplementor() {
    return {
        loadSavedData: () => {
            data.setData(JSON.parse(localStorage.getItem('data')))
            
            data.folders.forEach(folderObj => {
                const foldersObject = folders.createFolder(folderObj.title, folderObj.ID)

                foldersObject.folderDOMNode.addEventListener('click', () => {
                    addNoteBtn.classList.remove('inactive')
        
                    setActiveClass(foldersObject.folderDOMNode)
            
                    folders.showNotesInFolder()
            
                    console.log('DATA', data)
                })

                folderObj.notes.forEach(note => {
                    folders.addNoteToFolder({
                        title: note.title,
                        description: note.description,
                        priority: note.priority,
                        date: note.date === '' ? 'No date' : note.date,
                        ID: note.ID
                    }, folderObj.ID)
                })

            })

            console.log('FOLDERS', folders)
        }
    }
}

export const storage = saveData()