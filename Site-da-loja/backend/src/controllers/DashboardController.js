const Product = require('../models/Product')

module.exports = {
    async show(req, res){
        const { user_id } = req.headers

        const product = await Product.find({ user: user_id })

        return res.json(product)
    }
}