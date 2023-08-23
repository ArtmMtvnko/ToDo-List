import './index.html'
import './styles/index.scss'
import './scripts/folderInputAnimation.js'

import { createFolder } from './scripts/createFolder.js'
import { Folders } from './scripts/Folders.js'

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

