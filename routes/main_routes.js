var router = require('express').Router();
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

// app

router.get('/api/v8/read', do_get_all);
router.get('/api/v8/read/:_id', do_get_one);
router.post('/api/v8/create', do_create);
router.put('/api/v8/update', do_update);
router.delete('/api/v8/delete/:_id', do_delete);

function do_get_all(req, res) {
    console.log('getting all records');
}
function do_get_one(req, res) {
    console.log('getting singl patient');
}
function do_get_all(req, res) {
    console.log('getting all records');
}
function do_get_all(req, res) {
    console.log('getting all records');
}
function do_get_all(req, res) {
    console.log('getting all records');
}