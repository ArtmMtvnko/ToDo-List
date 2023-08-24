import './index.html'
import './styles/index.scss'
import './scripts/folderInputAnimation.js'
import './scripts/popUp.js'

import { createFolder } from './scripts/createFolder.js'
import { FolderList } from './scripts/FolderList.js'

import { createPopUp } from './scripts/popUp.js'

const folders = FolderList()

const createFolderBtn = document.querySelector('#createFolderBtn')
const folderNameInput = document.querySelector('#folderName')

createFolderBtn.addEventListener('click', () => {
    if (folderNameInput.value.trim() === '') return
    const folder = createFolder(folderNameInput.value)
    folder.addFolderToList()

    folderNameInput.value = ''
})

const creatNoteBtn = document.querySelector('#addNote')

creatNoteBtn.addEventListener('click', () => {
    const popUp = createPopUp()
    popUp.show()
})

