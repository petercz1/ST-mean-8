var router = require('express').Router();
var PATIENTCLASS = require('../mongodb/mongoose_connection');
module.exports = router;

router.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    res.render('index');
}

// api routes
router.get('/api/v8/read', do_get_all);
router.get('/api/v8/read/:_id', do_get_one);
router.post('/api/v8/create', do_create);
router.put('/api/v8/update', do_update);
router.delete('/api/v8/delete/:_id', do_delete);

// api functions
function do_get_all(req, res) {
    console.log('getting all records');
    PATIENTCLASS.find({},{name:1 , gender: 1}).then();
}
function do_get_one(req, res) {
    console.log('getting single patient');
    console.log(req.body);
}
function do_create(req, res) {
    console.log('creating single patient');
}
function do_update(req, res) {
    console.log('updating patient');
}
function do_delete(req, res) {
    console.log('deleting patient');
}