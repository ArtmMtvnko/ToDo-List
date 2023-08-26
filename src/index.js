import './index.html'
import './styles/index.scss'
import './scripts/folderInputAnimation'

import { folders } from './scripts/folderImplementor'
import { createPopUp } from './scripts/popUp'
import { data } from './scripts/data'
import { storage } from './scripts/saveData'
import { setActiveClass } from './scripts/setActiveClass'

window.onload = () => storage.loadSavedData()

const folderCreateBtn = document.querySelector('#createFolderBtn')
const folderInput = document.querySelector('#folderName')

const addNoteBtn = document.querySelector('#addNote')

folderCreateBtn.addEventListener('click', () => {
    const name = folderInput.value.trim()
    if (name === '') return
    
    folderInput.value = ''
    folderInput.classList.remove('contain-text')

    const foldersObject = folders.createFolder(name)

    folders.writeFolderToData(foldersObject.folderObject)

    foldersObject.folderDOMNode.addEventListener('click', () => {
        
        setActiveClass(foldersObject.folderDOMNode)

        folders.showNotesInFolder()

        console.log('DATA', data)
    })

    storage.updateData()

    console.log('Folders', folders)
})

addNoteBtn.addEventListener('click', () => {
    const popUp = createPopUp()
    popUp.show()
})

