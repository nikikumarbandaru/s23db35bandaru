var express = require('express');
const elephant_controlers= require('../controllers/elephants');
var router = express.Router();
/* GET elephants */
router.get('/', elephant_controlers.elephant_view_all_Page );
module.exports = router;
// GET request for one costume.
router.get('/elephants/:id', elephant_controlers.elephant_detail);
/* GET detail costume page */
router.get('/detail', elephant_controlers.elephant_view_one_Page);