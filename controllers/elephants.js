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

// Handle Elephants delete on DELETE.
exports.elephant_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await Elephant.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };

// Handle Elephants update form on PUT.
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

// Handle a show one view with id specified by query
exports.elephant_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await Elephant.findById( req.query.id)
  res.render('elephantdetail',
  { title: 'Elephant Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.elephant_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('elephantcreate', { title: 'Elephant Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

  // Handle building the view for updating a costume.
// query provides the id
exports.elephant_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await Elephant.findById(req.query.id)
  res.render('elephantupdate', { title: 'Elephant Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

//   // Handle a delete one view with id from query
// exports.elephant_delete_Page = async function(req, res) {
//   console.log("Delete view for id " + req.query.id)
//   try{
//   result = await Elephant.findById(req.query.id)
//   res.render('elephantdelete', { title: 'Elephant Delete', toShow:
//   result });
//   }
//   catch(err){
//   res.status(500)
//   res.send(`{'error': '${err}'}`);
//   }
//   };

