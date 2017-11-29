var router = require('express').Router();
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

// app

router.get('/', do_get_all);
router.get('/', do_get_one);
router.post('/', do_create);
router.put('/', do_update);
router.delete('/', do_delete);
