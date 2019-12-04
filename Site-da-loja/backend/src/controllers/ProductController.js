const Enterprise = require('../models/Enterprise')
const Product = require('../models/Product')

module.exports = {

    // Listagem de produtos por tipo
    async index(req, res){
        const { type } = req.query

        const product = await Product.find({ typeProduct: type })

        return res.json(product)
    },

    // Cria um novo produto
    async store(req, res){
        const { filename } = req.file
        const { nameProduct, typeProduct } = req.body
        const { price } = req.body
        const { enterprise_id } = req.headers

        const enterprise = await Enterprise.findById(enterprise_id)

        if(!enterprise){
            return res.status(400).json({ error: 'Não existe usuário Logado!'
             })
        }

        
        const product = await Product.create({
            enterprise: enterprise_id,
            thumbnail: filename,
            nameProduct,
            typeProduct,
            price: price.replace(',', '.')
        })
        
        return res.json(product)
    }

    
}