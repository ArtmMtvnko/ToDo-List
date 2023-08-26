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




// import './scripts/popUp.js'

// import { createFolder } from './scripts/createFolder.js'
// import { foldersList } from './scripts/FolderList.js'

// import { createPopUp } from './scripts/popUp.js'
// import { getID } from './scripts/getID'
// import { storage } from './scripts/saveData'

// window.onload = () => storage.restoreFolders()

// const createFolderBtn = document.querySelector('#createFolderBtn')
// const folderNameInput = document.querySelector('#folderName')

// export const creatNoteBtn = document.querySelector('#addNote')

// createFolderBtn.addEventListener('click', () => {
//     if (folderNameInput.value.trim() === '') return
//     let currentID = getID()
//     const folder = createFolder(folderNameInput.value.trim(), currentID)

//     const $folder = folder.addFolderToList()
//     foldersList.addFolder(folder)
//     // Remove console.log
//     console.log(foldersList)
//     storage.updateData(foldersList)

//     $folder.addEventListener('click', e => {
//         creatNoteBtn.setAttribute('folder-id', currentID)

//         const folders = document.querySelectorAll('.folder')
//         folders.forEach(folder => folder.classList.remove('active'))
//         e.target.classList.add('active')

//         folder.showNotes()
//     })


//     console.log(foldersList)

//     folderNameInput.value = ''
// })    

// creatNoteBtn.addEventListener('click', () => {
//     let id = creatNoteBtn.getAttribute('folder-id')
//     const popUp = createPopUp(id)
//     popUp.show()
// })

