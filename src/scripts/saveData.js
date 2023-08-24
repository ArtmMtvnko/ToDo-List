import { foldersList } from "./FolderList";

function saveData() {
    return {
        ...addToStorageImplementor()
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

export const storage = saveData()