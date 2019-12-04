const mongoose = require('mongoose')

// Esquema de produto para o DB
const ProductSchema = new mongoose.Schema({
    thumbnail: String,
    nameProduct: String,
    typeProduct: String,
    price: Number,
    enterprise: {
        type: mongoose.Schema.Types.ObjectId, // Associa produto com o usuário
        ref: 'Enterprise'
    },
}, {
    toJSON: {
        virtuals: true
    },
})

ProductSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Product', ProductSchema)