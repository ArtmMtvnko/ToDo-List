export const data = {
    folders: [],
    setData(parsedData) {
        parsedData.folders.forEach(folder => {
            this.folders.push(folder)
        })
    }
}