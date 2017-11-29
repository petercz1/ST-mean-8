var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27500/medical',{useMongoClient: true});

var contact_structure = {
    email: String,
    cell: String
}
var contact_schema = new mongoose.Schema(contact_structure);

var drugs_structure = {
    drug: String,
    usage: Number
}
var drugs_schema = new mongoose.Schema(drugs_structure);

var patient_structure = {
    name: String,
    gender: String,
    contact: contact_schema,
    medical: drugs_schema
}

var PATIENTCLASS = mongoose.model('patients', patient_structure);

module.exports = PATIENTCLASS;