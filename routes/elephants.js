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
/* GET create costume page */
router.get('/create', elephant_controlers.elephant_create_Page);
/* GET create update page */
router.get('/update', elephant_controlers.elephant_update_Page);
/* GET delete costume page */
router.get('/delete', elephant_controlers.elephant_delete_Page);