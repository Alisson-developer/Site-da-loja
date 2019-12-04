const User = require('../models/User')

module.exports = {
    async store(req, res){
        const { email } = req.body // também serve const email = req.body.email

        let user = await User.findOne({ email }) // procura o usuário por ID

        //Cria um novo usuário caso não exista nenhum logado
        if (!user){
            user = await User.create({ email })
        }

        return res.json(user)
    }
}