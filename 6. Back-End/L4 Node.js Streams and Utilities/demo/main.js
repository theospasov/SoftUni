const { homePage } = require("./boardController");
const { createImage } = require("./createController");

function handleRequest(req, res) {

    if (req.url == './favicon.ico') {
        res.writeHead(404);
        res.write('404 Not found');
        res.end();
    } else if(req.method == 'GET') {
        homePage(req, res);
    } else if (req.method == 'POST') {
        createImage(req, res)
    } else {
        res.writeHead(404);
        res.write('404 Not found');
        res.end();

    }

}

module.exports = {
    handleRequest
};