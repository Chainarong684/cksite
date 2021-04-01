var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('blog', { title: 'Blog', greeting: 'CK' })
});

module.exports = router;
