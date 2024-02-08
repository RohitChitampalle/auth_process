const fs = require("fs")

let logFunction = (fileName) => {
    return (req, res, next) => {

        fs.writeFile(fileName, `\n ${Date.now()}: ${req.method}: ${req.path} `, (err, data) => {
            next()
        })

    }

}


module.exports = {
    logFunction
}