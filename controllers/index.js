var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => res.send('Hello World!'));

router.post('/login',
    passport.authenticate('basic', { successRedirect: '/',
    failureRedirect: '/login' }));

module.exports = router;
