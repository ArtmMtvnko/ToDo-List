import { foldersList } from "./FolderList";
import { createFolder } from "./createFolder";

function saveData() {
    return {
        ...addToStorageImplementor(),
        ...restoreFoldersImplementor()
    }
}

function addToStorageImplementor() {
    return {
        updateData: (foldersObj) => {
            localStorage.removeItem('data')
            
            const data = JSON.stringify(foldersObj)
            localStorage.setItem('data', data)
        }
    }
}

function restoreFoldersImplementor() {
    return {
        restoreFolders: () => {
            const dataFromStorage = JSON.parse(localStorage.getItem('data'))

            foldersList.setNewFolders(dataFromStorage.list)


            const foldersToRestore = foldersList.list

            foldersToRestore.forEach(fold => {
                const folder = createFolder(fold.folderTitle, fold.ID)

                fold.notes.forEach(note => folder.addNote(note))


                const $folder = folder.addFolderToList()

                $folder.addEventListener('click', e => {
                    const folders = document.querySelectorAll('.folder')
                    folders.forEach(folder => folder.classList.remove('active'))
                    e.target.classList.add('active')

                    folder.showNotes()
                })
            })


            console.log(foldersList)
        }
    }
}

export const storage = saveData()