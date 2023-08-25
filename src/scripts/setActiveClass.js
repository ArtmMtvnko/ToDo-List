import { folders } from "./folderImplementor"

export function setActiveClass(element) {
    folders.folders.forEach(obj => {
        obj.folderNode.classList.remove('active')

        element.classList.add('active')
    })
}