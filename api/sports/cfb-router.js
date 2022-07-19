const router = require('express').Router();


router.get('/', async (req, res, next) => {
    res.send("<h1>Hey There good Looking<h1>");
})

module.exports = router