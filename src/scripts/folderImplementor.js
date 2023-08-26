import angleDownSvg from '../assets/icons/angle-down.svg'
import trashBin from '../assets/icons/trash-can.svg'
import editSvg from '../assets/icons/edit.svg'

import { data } from './data'
import { storage } from './saveData'
import { popUpForEditing } from './popUpForEditing'
import { addNoteBtn } from '../index'

function folderImplementor() {
    const folders = {
        folders: []
    }
    return {
        ...folders,
        ...createFolderImplementor(folders),
        ...addNoteToFolderImplementor(folders),
        ...addNoteToDataImplementor(),
        ...showNotesInFolderImplementor(folders)
    }
}

function createFolderImplementor({folders}) {
    return {
        createFolder: (title, setID = null) => {
            const folderList = document.querySelector('#foldersList')
            const folder = document.createElement('div')
            folder.classList.add('folder')

            const folderName = document.createElement('p')
            folderName.textContent = title
            const bin = document.createElement('img')
            bin.src = trashBin

            folder.appendChild(folderName)
            folder.appendChild(bin)

            let ID

            if (setID === null) {
                ID = Math.floor(Math.random() * 10000000000)
            } else {
                ID = setID
            }

            folder.setAttribute('uniqe-id', ID)

            folderList.appendChild(folder)

            folders.push({
                folderNode: folder,
                notes: []
            })

            console.log(folders)

            bin.addEventListener('click', () => {
                setTimeout(() => addNoteBtn.classList.add('inactive'), 0)
                
                const indexToRemoveNode = folders.findIndex(obj => {
                    return obj.folderNode === folder
                })

                folders.splice(indexToRemoveNode, 1)
                
                console.log(folders)

                folder.remove()

                const idToRemove = parseInt(folder.getAttribute('uniqe-id'))

                const indexToRemoveData =data.folders.findIndex(folderObj => {
                    return folderObj.ID === idToRemove
                })

                data.folders.splice(indexToRemoveData, 1)

                storage.updateData()

                const notesList = document.querySelector('#notesList')
                notesList.innerHTML = ''
            })

            return {
                folderDOMNode: folder,
                folderObject: {
                    title,
                    ID,
                    notes: []
                }
            }
        },
        writeFolderToData: (folderObj) => {
            data.folders.push(folderObj)
            console.log('Data', data)
        }
    }
}

function addNoteToFolderImplementor({folders}) {
    return {
        addNoteToFolder: (note, folderID) => {
            const requiredFolder = folders.find(folder => {
                const id = parseInt(folder.folderNode.getAttribute('uniqe-id'))
                return folderID === id
            })

            const noteNode = document.createElement('div')
            noteNode.classList.add('notes__item', 'hidden')
            noteNode.setAttribute('uniqe-id', note.ID)
            
            // Checkbox
            const checkboxInput = document.createElement('input')
            checkboxInput.type = 'checkbox'

            // Title
            const titleParagraph = document.createElement('p')
            titleParagraph.classList.add('notes__title')
            titleParagraph.textContent = note.title

            // Priority
            const priorityParagraph = document.createElement('p')
            priorityParagraph.classList.add('notes__priority')
            priorityParagraph.textContent = note.priority

            // Date
            const dateParagraph = document.createElement('p')
            dateParagraph.classList.add('notes__date')
            dateParagraph.textContent = note.date
            
            // Delete Btn
            const deleteBtn = document.createElement('img')
            deleteBtn.src = trashBin
            
            deleteBtn.addEventListener('click', () => {
                const requiredFolder = folders.find(folder => folder.folderNode.classList.contains('active'))
                const indexToRemoveNode = requiredFolder.notes.findIndex(note => note === noteNode)
                requiredFolder.notes.splice(indexToRemoveNode, 1)
                noteNode.remove()
                
                const uniqeID = parseInt(requiredFolder.folderNode.getAttribute('uniqe-id'))
                const noteUniqeId = parseInt(noteNode.getAttribute('uniqe-id'))
                
                const requiredFolderFromData = data.folders.find(folderObj => folderObj.ID === uniqeID)
                const indexToRemoveNodeFromData = requiredFolderFromData.notes.findIndex(note => note.ID === noteUniqeId)
                requiredFolderFromData.notes.splice(indexToRemoveNodeFromData, 1)
                storage.updateData()
            })
            
            // Arrow Button
            const angleDownBtn = document.createElement('img')
            angleDownBtn.classList.add('notes__arrow-button')
            angleDownBtn.src = angleDownSvg
            
            angleDownBtn.addEventListener('click', () => noteNode.classList.toggle('hidden'))
            
            // Description
            const descriptionWrap = document.createElement('div')
            descriptionWrap.classList.add('notes__description')
            
            const descriptionParagraph = document.createElement('p')
            descriptionParagraph.textContent = note.description

            // Edit Btn
            const editBtn = document.createElement('img')
            editBtn.src = editSvg

            editBtn.addEventListener('click', () => {
                popUpForEditing.createPopUpWindow(noteNode, {
                    title: titleParagraph.textContent,
                    description: descriptionParagraph.textContent,
                    date: dateParagraph.textContent,
                    isLow() {
                        return priorityParagraph.textContent === 'Low' ? true : false
                    },
                    isMedium() {
                        return priorityParagraph.textContent === 'Medium' ? true : false
                    },
                    isHigh() {
                        return priorityParagraph.textContent === 'High' ? true : false
                    }
                })
            })


            // HERE !!!!!!!!!!!!

            // Concatination
            descriptionWrap.appendChild(descriptionParagraph)
            
            noteNode.append(checkboxInput, titleParagraph, priorityParagraph, dateParagraph, editBtn, deleteBtn, angleDownBtn, descriptionWrap)
            
            requiredFolder.notes.push(noteNode)
        }
    }
}

function addNoteToDataImplementor() {
    return {
        addNoteToData: (note, folderID) => {
            const requiredFolder = data.folders.find(folderObj => {
                return folderObj.ID === folderID
            })

            requiredFolder.notes.push(note)
        }
    }
}

function showNotesInFolderImplementor({folders}) {
    return {
        showNotesInFolder: (filters = null) => {
            const requiredFolderObj = folders.find(folder => {
                return folder.folderNode.classList.contains('active')
            })

            if (requiredFolderObj === undefined) return

            const notesList = document.querySelector('#notesList')

            // while (notesList.firstChild) {
            //     notesList.removeChild(notesList.firstChild)
            // }
            notesList.innerHTML = ''

            if (filters !== null) {
                const keyWord = filters.trim()

                for (const note of requiredFolderObj.notes) {
                    const title = note.querySelector('.notes__title')
                    if (title.textContent.includes(keyWord)) {
                        notesList.appendChild(note)
                        continue
                    }
                    const description = note.querySelector('.notes__description').firstChild
                    if (description.textContent.includes(keyWord)) {
                        notesList.appendChild(note)
                    }
                }
                
                return
            }

            requiredFolderObj.notes.forEach(note => {
                notesList.appendChild(note)
            })
        }
    }
}

export const folders = folderImplementor()