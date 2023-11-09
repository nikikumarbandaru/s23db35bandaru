var Elephant = require("../models/elephants");
// List of all Elephants
exports.elephant_list = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant list');
};
// for a specific Elephant.
exports.elephant_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant detail: ' + req.params.id);
};
// Handle Elephant create on POST.
exports.elephant_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant create POST');
};
// Handle Elephant delete form on DELETE.
exports.elephant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant delete DELETE ' + req.params.id);
};
// Handle Elephant update form on PUT.
exports.elephant_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant update PUT' + req.params.id);
};

// List of all Elephants
exports.elephant_list = async function(req, res) {
try{
theElephant = await Elephant.find();
res.send(theElephant);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.elephant_view_all_Page = async function(req, res) {
try{
  theElephant = await Elephant.find();
res.render('elephants', { title: 'Elephant Search Results', results: theElephant });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};