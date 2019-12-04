const multer = require('multer')
const path = require('path')

module.exports = {
    
    //Especifica como o multer vai armazenar as imagens e/ou arquivos recebidos na aplicação
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),//diretório que será salvos os arquivos ou imagens.
        filename: (req, file, cb) =>{
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)
            cb(null, `${name}-${Date.now()}${ext}`)
        },
        
    }),
}