function FolderList() {
    const folder = {
        list: []
    }
    return {
        ...folder,
        ...addFolderImplementor(folder)
    }
}

function addFolderImplementor({list}) {
    return {
        addFolder: (folderObj) => {
            list.push(folderObj)
        }
    }
}

export const foldersList = FolderList()