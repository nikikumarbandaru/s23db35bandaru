var Elephant = require("../models/elephants");
// List of all Elephants
exports.elephant_list = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant list');
};
// for a specific Costume.
exports.elephant_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await Elephant.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };
// Handle Costume create on POST.
exports.elephant_create_post = async function(req, res) {
  console.log(req.body)
  let document = new Elephant();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.elephant_Habitat = req.body.elephant_Habitat;
  document.elephant_Weight = req.body.elephant_Weight;
  document.elephant_Lifespan = req.body.elephant_Lifespan;
  document.elephant_TuskLength = req.body.elephant_TuskLength;
  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };

// Handle Elephant delete form on DELETE.
exports.elephant_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Elephant delete DELETE ' + req.params.id);
};

// Handle Costume update form on PUT.
exports.elephant_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
  let toUpdate = await Elephant.findById( req.params.id)
  // Do updates of properties
  if(req.body.elephant_Habitat) toUpdate.elephant_Habitat = req.body.elephant_Habitat;
  if(req.body.elephant_Weight) toUpdate.elephant_Weight = req.body.elephant_Weight;
  if(req.body.elephant_Lifespan) toUpdate.elephant_Lifespan = req.body.elephant_Lifespan;
  if(req.body.elephant_TuskLength) toUpdate.elephant_TuskLength = req.body.elephant_TuskLength;
  let result = await toUpdate.save();
  console.log("Success " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": ${err}: Update for id ${req.params.id}
  failed`);
  }
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


