const { homePage, sendFile } = require("./boardController");
const { createImage } = require("./createController");

function handleRequest(req, res) {
    let handler

    if(req.method == 'GET') {
        if (req.url.slice(0, 4) == '/img' || req.url == '/style.css') {
            handler = sendFile
        }else if (req.url == '/') {
            handler = homePage(req, res);
        } 
        
    } else if (req.method == 'POST') {
        handler = createImage(req, res)
    } 

    if (typeof handler == 'function') {
        handler(req, res)
    
    } else {
        res.writeHead(404);
        res.write('404 Not found');
        res.end();

    }

}

module.exports = {
    handleRequest
};