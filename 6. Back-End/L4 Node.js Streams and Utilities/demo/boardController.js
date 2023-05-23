function homePage(req, res) {
    res.write('home page')
    res.end()
}

function sendFile(req, res) {
    res.write('static file')
    res.end()
}

module.exports = {
    homePage,
    sendFile
};