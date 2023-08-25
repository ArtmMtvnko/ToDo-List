function FolderList() {
    const folder = {
        list: []
    }
    return {
        ...folder,
        ...addFolderImplementor(folder),
        ...setNewFoldersImplementor(folder)
    }
}

function addFolderImplementor({list}) {
    return {
        addFolder: (folderObj) => {
            list.push(folderObj)
        }
    }
}

function setNewFoldersImplementor({list}) {
    return {
        setNewFolders: (folders) => {
            folders.forEach(folder => list.push(folder))
        }
    }
}

export const foldersList = FolderList()