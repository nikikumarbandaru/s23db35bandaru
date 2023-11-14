var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var elephant_controller = require('../controllers/elephants');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Elephant.
router.post('/elephants', elephant_controller.elephant_create_post);
// DELETE request to delete Elephant.
router.delete('/elephants/:id', elephant_controller.elephant_delete);
// PUT request to update Elephant.
router.put('/elephants/:id', elephant_controller.elephant_update_put);
// GET request for one Elephant.
router.get('/elephants/:id', elephant_controller.elephant_detail);
// GET request for list of all Elephant items.
router.get('/elephants', elephant_controller.elephant_list);
module.exports = router;
