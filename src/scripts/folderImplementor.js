import angleDownSvg from '../assets/icons/angle-down.svg'
import trashBin from '../assets/icons/trash-can.svg'
import { data } from './data'
import { storage } from './saveData'

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

            descriptionWrap.appendChild(descriptionParagraph)

            noteNode.append(checkboxInput, titleParagraph, priorityParagraph, dateParagraph, angleDownBtn, descriptionWrap)
            
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
        showNotesInFolder: () => {
            const requiredFolderObj = folders.find(folder => {
                return folder.folderNode.classList.contains('active')
            })

            if (requiredFolderObj === undefined) return

            const notesList = document.querySelector('#notesList')

            // while (notesList.firstChild) {
            //     notesList.removeChild(notesList.firstChild)
            // }
            notesList.innerHTML = ''

            requiredFolderObj.notes.forEach(note => {
                notesList.appendChild(note)
            })
        }
    }
}

export const folders = folderImplementor()