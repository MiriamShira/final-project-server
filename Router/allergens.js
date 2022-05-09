const allergensController = require('../Controller/allergens');
const express = require('Express');
const router = express.Router();

router.get('/', allergensController.getAllergens);
router.get('/more', allergensController.getMoreAllergens);
//router.post('/', allergensController.addAllergen);


module.exports = router;