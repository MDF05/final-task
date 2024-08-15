const fs = require("fs")

function saveImage(buffer, name) {
    fs.writeFile(`${name}`, buffer, (err) => {
        if (err) return false
        return true
    })
}

function deleteImage(name) {
    fs.rm(name, (err) => {
        if (err) return false

        return true
    })
}

module.exports = { saveImage, deleteImage }
