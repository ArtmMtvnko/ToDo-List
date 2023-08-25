import './index.html'
import './styles/index.scss'
import './scripts/folderInputAnimation.js'

import { folders } from './scripts/folderImplementor'
import { createPopUp } from './scripts/popUp(1)'
import { data } from './scripts/data'

const folderCreateBtn = document.querySelector('#createFolderBtn')
const folderInput = document.querySelector('#folderName')

const addNoteBtn = document.querySelector('#addNote')

folderCreateBtn.addEventListener('click', () => {
    const name = folderInput.value.trim()
    if (name === '') return
    
    folderInput.value = ''
    folderInput.classList.remove('contain-text')

    const foldersInObj = folders.createFolder(name)

    folders.writeFolderToData(foldersInObj.folderObject)

    foldersInObj.folderDOMNode.addEventListener('click', () => {
        
        setActiveClass(foldersInObj.folderDOMNode)

        folders.showNotesInFolder()

        console.log('DATA', data)
    })

    console.log('Folders', folders)
})

addNoteBtn.addEventListener('click', () => {
    const popUp = createPopUp()
    popUp.show()
})

function setActiveClass(element) {
    folders.folders.forEach(obj => {
        obj.folderNode.classList.remove('active')

        element.classList.add('active')
    })
}



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

