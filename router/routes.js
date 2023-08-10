const express = require('express');
const routes = express.Router();

const userController = require('../controller/userController');

routes.get('/user', userController.returnUsers);
routes.post('/user', userController.createUser);

routes.post('/user/autheticated', userController.authenticatedUser);

module.exports = routes; 