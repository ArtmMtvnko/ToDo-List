import trashBin from '../assets/icons/trash-can.svg'
import { data } from './data'

function folderImplementor() {
    const folders = {
        folders: []
    }
    return {
        ...folders,
        ...createFolderImplementor(folders),
        ...addNoteToFolderImplementor(folders)
    }
}

function createFolderImplementor({folders}) {
    return {
        createFolder: (title) => {
            const folderList = document.querySelector('#foldersList')
            const folder = document.createElement('div')
            folder.classList.add('folder')

            const folderName = document.createElement('p')
            folderName.textContent = title
            const bin = document.createElement('img')
            bin.src = trashBin

            folder.appendChild(folderName)
            folder.appendChild(bin)

            const ID = Math.floor(Math.random() * 10000000000)
            folder.setAttribute('uniqe-id', ID)

            folderList.appendChild(folder)

            folders.push(folder)

            folder.addEventListener('click', () => {

            })

            console.log(folders)

            // bin.addEventListener('click', () => {
            //     folder.remove()
            // })

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
            
        }
    }
}

export const folders = folderImplementor()