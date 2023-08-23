import './index.html'
import './styles/index.scss'
import './scripts/folderInputAnimation.js'
import './scripts/popUp.js'

import { createFolder } from './scripts/createFolder.js'
import { Folders } from './scripts/Folders.js'

import { createPopUp } from './scripts/popUp.js'

const folders = new Folders()

const createFolderBtn = document.querySelector('#createFolderBtn')
const folderNameInput = document.querySelector('#folderName')

createFolderBtn.addEventListener('click', () => {
    if (folderNameInput.value.trim() === '') return
    const folder = createFolder(folderNameInput.value)
    folder.addFolderToList()
    folders.addFolder(folder)

    folderNameInput.value = ''
})

const creatNoteBtn = document.querySelector('#addNote')

creatNoteBtn.addEventListener('click', () => {
    const popUp = createPopUp()
    popUp.show()
})

