const { Router } = require('express')

const router = Router() 

router.get('/', (req, res) => { 
    res.sendFile(__dirname + '/index.html')
})

module.exports = router 

// 2. We attach the router to the index.js
// this will automatically integrate the routing module in out index.js


