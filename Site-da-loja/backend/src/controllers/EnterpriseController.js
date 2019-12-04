const Enterprise = require('../models/Enterprise')

module.exports = {
    async store(req, res){
        const { empresa } = req.body
        const { senha } = req.body

        let enterprise = await Enterprise.findOne({ empresa })

        if(!enterprise){
            enterprise = await Enterprise.create({ empresa, senha })
        }
        
        return res.json(enterprise)
    }
}