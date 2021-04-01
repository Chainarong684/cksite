var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('note', { title: 'Note' })
});

module.exports = router;
