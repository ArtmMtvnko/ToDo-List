import trashBin from '../assets/icons/trash-can.svg'

export function createFolder(folderTitle, ID) {
    const folder = {
        folderTitle,
        ID,
        notes: []
    }
    return {
        ...folder,
        ...addFolderToList(folder),
        ...addNoteToArr(folder)
    }
}

function addFolderToList({folderTitle, notes}) {
    return {
        addFolderToList: () => {
            const folderList = document.querySelector('#foldersList')
            const folder = document.createElement('div')
            folder.classList.add('folder')

            const folderName = document.createElement('p')
            folderName.textContent = folderTitle
            const bin = document.createElement('img')
            bin.src = trashBin

            folder.appendChild(folderName)
            folder.appendChild(bin)

            folderList.appendChild(folder)

            bin.addEventListener('click', () => {
                folder.remove()
            })

            return folder

            folder.addEventListener('click', e => {
                const folders = document.querySelectorAll('.folder')
                folders.forEach(folder => folder.classList.remove('active'))
                e.target.classList.add('active')
            })
        }
    }
}

function addNoteToArr({notes}) {
    return {
        addNote: ({title, description, priority, date}) => {
            notes.push({
                title,
                description,
                priority,
                date
            })
        }
    }
}