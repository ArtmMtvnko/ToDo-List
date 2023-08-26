import xmark from '../assets/icons/xmark.svg'
import { storage } from './saveData'
import { data } from './data'

import { priorityValue, createRadioButtons } from './popUp'

function createPopUpForEditing() {
    return {
        ...createPopUpWindowImplementor()
    }
}

function createPopUpWindowImplementor() {
    return {
        createPopUpWindow: (noteNode, params) => {
            const windowWrap = document.querySelector('.wrap')
            
            const popUpWrap = document.createElement('div')
            popUpWrap.classList.add('pop-up')
            const popUp = document.createElement('div')
            popUp.classList.add('pop-up__body')

            // Img (x-mark)
            const exitBtn = document.createElement('img')
            exitBtn.src = xmark

            exitBtn.addEventListener('click', () => popUpWrap.remove())

            // Title
            const titleWrap = document.createElement('div')
            titleWrap.classList.add('pop-up__title')

            const titleParagraph = document.createElement('p')
            titleParagraph.textContent = 'Title'

            const titleInput = document.createElement('input')
            titleInput.type = 'text'
            titleInput.placeholder = 'Your title'
            titleInput.value = params.title

            titleWrap.append(titleParagraph, titleInput)

            // Description
            const descriptionWrap = document.createElement('div')
            descriptionWrap.classList.add('pop-up__description')

            const descriptionParagraph = document.createElement('p')
            descriptionParagraph.textContent = 'Description'

            const descriptionTextArea = document.createElement('textarea')
            descriptionTextArea.placeholder = 'Your description'
            descriptionTextArea.cols = 30
            descriptionTextArea.rows = 10
            descriptionTextArea.value = params.description

            descriptionWrap.append(descriptionParagraph, descriptionTextArea)

            // Priority
            const priorityWrap = document.createElement('div')
            priorityWrap.classList.add('pop-up__priority')

            const priorityParagraph = document.createElement('p')
            priorityParagraph.textContent = 'Priority'

            const radioBtnsWrap = document.createElement('div')
            radioBtnsWrap.classList.add('radio-inputs')

            const lowPriorityBtn = createRadioButtons('Low', params.isLow())
            const mediumPriorityBtn = createRadioButtons('Medium', params.isMedium())
            const highPriorityBtn = createRadioButtons('High', params.isHigh())

            radioBtnsWrap.append(lowPriorityBtn, mediumPriorityBtn, highPriorityBtn)

            priorityWrap.append(priorityParagraph, radioBtnsWrap)

            // Date
            const dateWrap = document.createElement('div')
            dateWrap.classList.add('pop-up__date')

            const dateParagraph = document.createElement('p')
            dateParagraph.textContent = 'Date'

            const dateInput = document.createElement('input')
            dateInput.type = 'date'
            dateInput.value = params.date

            dateWrap.append(dateParagraph, dateInput)

            // Buttons
            const applyButton = document.createElement('button')
            applyButton.classList.add('pop-up__add-button')
            applyButton.textContent = 'Apply'

            const cancelButton = document.createElement('button')
            cancelButton.classList.add('pop-up__cancel-button', 'close-pop-up')
            cancelButton.textContent = 'Cancel'

            applyButton.addEventListener('click', () => {
                const priorityToWrite = priorityValue([lowPriorityBtn, mediumPriorityBtn, highPriorityBtn])
                
                noteNode.querySelector('.notes__title').textContent = titleInput.value
                noteNode.querySelector('.notes__priority').textContent = priorityToWrite
                noteNode.querySelector('.notes__date').textContent = dateInput.value === '' ? 'No date' : dateInput.value
                noteNode.querySelector('.notes__description').firstChild.textContent = descriptionTextArea.value

                const currentFolderID = parseInt(document.querySelector('.folder.active').getAttribute('uniqe-id'))
                const currentNoteID = parseInt(noteNode.getAttribute('uniqe-id'))

                const requiredFolder = data.folders.find(folderObj => folderObj.ID === currentFolderID)
                const requiredNote = requiredFolder.notes.find(note => note.ID === currentNoteID)
                requiredNote.title = titleInput.value
                requiredNote.description = descriptionTextArea.value
                requiredNote.priority = priorityToWrite
                requiredNote.date = dateInput.value

                storage.updateData()
                popUpWrap.remove()
            })

            cancelButton.addEventListener('click', () => popUpWrap.remove())



            popUp.append(exitBtn, titleWrap, descriptionWrap, priorityWrap, dateWrap, applyButton, cancelButton)
            popUpWrap.appendChild(popUp)
            windowWrap.appendChild(popUpWrap)
        }
    }
}

export const popUpForEditing = createPopUpForEditing()