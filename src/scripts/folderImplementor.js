import trashBin from '../assets/icons/trash-can.svg'

function folderImplementor() {
    const folders = {
        folders: []
    }
    return {
        ...folders,
        ...createFolderImplementor(folders)
    }
}

function createFolderImplementor({folders}) {
    return {
        createFolder: (title) => {
            const folderList = document.querySelector('#foldersList')
            const folder = document.createElement('div')
            folder.classList.add('folder')

            const folderName = document.createElement('p')
            folderName.textContent = title
            const bin = document.createElement('img')
            bin.src = trashBin

            folder.appendChild(folderName)
            folder.appendChild(bin)
            folder.setAttribute('uniqe-id', Math.floor(Math.random() * 10000000000))

            folderList.appendChild(folder)

            // bin.addEventListener('click', () => {
            //     folder.remove()
            // })

            return folder
        },
        writeFolderToData: () => {

        }
    }
}

export const folders = folderImplementor()