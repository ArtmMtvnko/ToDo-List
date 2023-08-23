const folderInput = document.querySelector('#folderName')

folderInput.addEventListener('blur', () => {
    if (folderInput.value.trim() === '') {
        folderInput.classList.remove('contain-text')
        return
    }
    folderInput.classList.add('contain-text')
})