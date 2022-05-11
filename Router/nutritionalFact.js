const { required } = require('nodemon/lib/config');
const nutritionalFactcontroller=require('../Controller/nutritionalFact');
const express = require('Express');
const router = express.Router();
router.get('/',nutritionalFactcontroller.getNutritionalFact);
module.exports = router;