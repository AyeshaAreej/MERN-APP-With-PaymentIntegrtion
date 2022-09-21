const express = require('express')
const userController = require('../controllers/userController')


const route = express.Router()

//authorization
// route.get('/',userController.signupPage)
route.post('/register',userController.createUser)
route.post('/loginn',userController.validateUser);
route.post('/payment',userController.paymentController )


module.exports = route;