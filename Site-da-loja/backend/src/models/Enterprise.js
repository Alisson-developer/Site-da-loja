const mongoose = require('mongoose')

const EnterpriseSchema = new mongoose.Schema({
    empresa: String,
    senha: String,
})

module.exports = mongoose.model('Enterprise', EnterpriseSchema)