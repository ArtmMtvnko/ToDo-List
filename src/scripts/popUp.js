import xmark from '../assets/icons/xmark.svg'
import { folders } from './folderImplementor'
import { storage } from './saveData'

export function createPopUp(title = '', description = '', priority = 'low', date = 'No date') {
    const params = {
        title,
        description,
        priority,
        date
    }
    return {
        ...params,
        ...showPopUp(params)
    }
}

function showPopUp({title, description}) {
    return {
        show: () => {
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
            titleInput.value = title

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
            descriptionTextArea.value = description

            descriptionWrap.append(descriptionParagraph, descriptionTextArea)

            // Priority
            const priorityWrap = document.createElement('div')
            priorityWrap.classList.add('pop-up__priority')

            const priorityParagraph = document.createElement('p')
            priorityParagraph.textContent = 'Priority'

            const radioBtnsWrap = document.createElement('div')
            radioBtnsWrap.classList.add('radio-inputs')

            const lowPriorityBtn = createRadioButtons('Low', true)
            const mediumPriorityBtn = createRadioButtons('Medium')
            const highPriorityBtn = createRadioButtons('High')

            radioBtnsWrap.append(lowPriorityBtn, mediumPriorityBtn, highPriorityBtn)

            priorityWrap.append(priorityParagraph, radioBtnsWrap)

            // Date
            const dateWrap = document.createElement('div')
            dateWrap.classList.add('pop-up__date')

            const dateParagraph = document.createElement('p')
            dateParagraph.textContent = 'Date'

            const dateInput = document.createElement('input')
            dateInput.type = 'date'

            dateWrap.append(dateParagraph, dateInput)

            // Buttons
            const applyButton = document.createElement('button')
            applyButton.classList.add('pop-up__add-button')
            applyButton.textContent = 'Apply'

            const cancelButton = document.createElement('button')
            cancelButton.classList.add('pop-up__cancel-button', 'close-pop-up')
            cancelButton.textContent = 'Cancel'

            applyButton.addEventListener('click', () => {
                const $desiredFolder = document.querySelector('.folder.active')
                const uniqeID = parseInt($desiredFolder.getAttribute('uniqe-id'))
                const noteUniqeId = Math.floor(Math.random() * 10000000000)
                
                folders.addNoteToFolder({
                    title: titleInput.value === '' ? 'New note' : titleInput.value,
                    description: descriptionTextArea.value,
                    priority: priorityValue([lowPriorityBtn, mediumPriorityBtn, highPriorityBtn]),
                    date: dateInput.value === '' ? 'No date' : dateInput.value,
                    ID: noteUniqeId
                }, uniqeID)

                folders.addNoteToData({
                    title: titleInput.value,
                    description: descriptionTextArea.value,
                    priority: priorityValue([lowPriorityBtn, mediumPriorityBtn, highPriorityBtn]),
                    date: dateInput.value,
                    ID: noteUniqeId
                }, uniqeID)

                folders.showNotesInFolder()
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

export function createRadioButtons(text, checked = false) {
    const label = document.createElement('label')
    label.classList.add('radio')

    const input = document.createElement('input')
    input.type = 'radio'
    input.name = 'radio'
    
    if (checked) input.setAttribute('checked', "")

    const span = document.createElement('span')
    span.classList.add('name')
    span.textContent = text

    label.append(input, span)

    return label
}

export function priorityValue(elements) {
    return elements.find(elem => elem.firstChild.checked).textContent
}