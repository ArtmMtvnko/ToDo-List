export function FolderList() {
    const folder = {
        list: []
    }
    return {
        ...folder,
        ...setNoteImplementor(folder),
        ...getNoteImplementor(folder)
    }
}

function setNoteImplementor({list}) {
    return {
        setNote: (noteObj) => {
            list.push(noteObj)
        }
    }
}

function getNoteImplementor({list}) {
    return {
        getNotes: () => {
            return list
        }
    }
}