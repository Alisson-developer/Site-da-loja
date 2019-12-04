const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const ProductController = require('./controllers/ProductController')
const DashboardController = require('./controllers/DashboardController')
const EnterpriseController = require('./controllers/EnterpriseController')

const routes = express.Router()
const upload = multer(uploadConfig)

//Rotas de Controllers
routes.post('/sessions', SessionController.store)
routes.get('/products', ProductController.index)
routes.post('/products', upload.single('thumbnail'), ProductController.store)
routes.get('/dashboard', DashboardController.show)
routes.post('/enterprise', EnterpriseController.store)

module.exports = routes