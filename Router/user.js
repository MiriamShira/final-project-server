const userController = require('../Controller/user');
const express = require('Express');
const router = express.Router();

router.get('/:userName/:password/', userController.login);
// router.get('/:id', userController.getTheLastOrdersByUserId);
 router.post('/', userController.signUp);
// router.get('/', userController.get);
// router.delete('/:id', userController.delete);
 router.put('/:userName', userController.updateDetails);
//router.get('/:lastOrder/:id', userController.getTheLastOrdersByUserId);

module.exports = router;