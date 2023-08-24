import trashBin from '../assets/icons/trash-can.svg'
import angleDownSvg from '../assets/icons/angle-down.svg'

export function createFolder(folderTitle, ID) {
    const folder = {
        folderTitle,
        ID,
        notes: []
    }
    return {
        ...folder,
        ...addFolderToList(folder),
        ...addNoteToArr(folder),
        ...showNotesImplementor(folder)
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

            // folder.addEventListener('click', e => {
            //     const folders = document.querySelectorAll('.folder')
            //     folders.forEach(folder => folder.classList.remove('active'))
            //     e.target.classList.add('active')
            // })
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
                date,
                ID: Math.floor(Math.random() * 1000000)
            })
        }
    }
}

function showNotesImplementor({notes}) {
    return {
        showNotes() {
            const notesList = document.querySelector('#notesList')

            while (notesList.firstChild) {
                notesList.removeChild(notesList.firstChild)
            }

            if (notes.length === 0) return

            notes.forEach(folderObject => {
                const note = document.createElement('div')
                note.classList.add('notes__item', 'hidden')
                
                // Checkbox
                const checkboxInput = document.createElement('input')
                checkboxInput.type = 'checkbox'
    
                // Title
                const titleParagraph = document.createElement('p')
                titleParagraph.classList.add('notes__title')
                titleParagraph.textContent = folderObject.title
    
                // Priority
                const priorityParagraph = document.createElement('p')
                priorityParagraph.classList.add('notes__priority')
                priorityParagraph.textContent = folderObject.priority
    
                // Date
                const dateParagraph = document.createElement('p')
                dateParagraph.classList.add('notes__date')
                dateParagraph.textContent = folderObject.date
    
                // Arrow Button
                const angleDownBtn = document.createElement('img')
                angleDownBtn.classList.add('notes__arrow-button')
                angleDownBtn.src = angleDownSvg

                angleDownBtn.addEventListener('click', () => note.classList.toggle('hidden'))
    
                // Description
                const descriptionWrap = document.createElement('div')
                descriptionWrap.classList.add('notes__description')

                const descriptionParagraph = document.createElement('p')
                descriptionParagraph.textContent = folderObject.description

                descriptionWrap.appendChild(descriptionParagraph)

                note.append(checkboxInput, titleParagraph, priorityParagraph, dateParagraph, angleDownBtn, descriptionWrap)
                notesList.appendChild(note)
            })

        }
    }
}