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

const searchInput = document.querySelector('#searchInput')
const searchBtn = document.querySelector('#searhBtn')

export const addNoteBtn = document.querySelector('#addNote')
addNoteBtn.classList.add('inactive')

folderCreateBtn.addEventListener('click', () => {
    const name = folderInput.value.trim()
    if (name === '') return
    
    folderInput.value = ''
    folderInput.classList.remove('contain-text')

    const foldersObject = folders.createFolder(name)

    folders.writeFolderToData(foldersObject.folderObject)

    foldersObject.folderDOMNode.addEventListener('click', () => {
        addNoteBtn.classList.remove('inactive')
        
        setActiveClass(foldersObject.folderDOMNode)

        folders.showNotesInFolder()

        console.log('DATA', data)
    })

    storage.updateData()

    console.log('Folders', folders)
})

addNoteBtn.addEventListener('click', () => {
    if (addNoteBtn.classList.contains('inactive')) return
    
    const popUp = createPopUp()
    popUp.show()
})

searchBtn.addEventListener('click', () => {
    folders.showNotesInFolder(searchInput.value)
    searchInput.value = ''
})