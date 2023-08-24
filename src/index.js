import './index.html'
import './styles/index.scss'
import './scripts/folderInputAnimation.js'
import './scripts/popUp.js'

import { createFolder } from './scripts/createFolder.js'
import { foldersList } from './scripts/FolderList.js'

import { createPopUp } from './scripts/popUp.js'
import { getID } from './scripts/getID'
import { storage } from './scripts/saveData'

const createFolderBtn = document.querySelector('#createFolderBtn')
const folderNameInput = document.querySelector('#folderName')

const creatNoteBtn = document.querySelector('#addNote')

createFolderBtn.addEventListener('click', () => {
    if (folderNameInput.value.trim() === '') return
    let currentID = getID()
    const folder = createFolder(folderNameInput.value.trim(), currentID)

    const $folder = folder.addFolderToList()
    foldersList.addFolder(folder)
    storage.updateData(foldersList)

    $folder.addEventListener('click', e => {
        creatNoteBtn.setAttribute('folder-id', currentID)

        const folders = document.querySelectorAll('.folder')
        folders.forEach(folder => folder.classList.remove('active'))
        e.target.classList.add('active')

        folder.showNotes()
    })


    console.log(foldersList)

    folderNameInput.value = ''
})    

creatNoteBtn.addEventListener('click', () => {
    let id = creatNoteBtn.getAttribute('folder-id')
    const popUp = createPopUp(id)
    popUp.show()
})

