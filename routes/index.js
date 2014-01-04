
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.getinvolved = function(req, res){
  res.render('getinvolved');
};

exports.faq = function(req, res){
  res.render('faq');
};

exports.roadmap = function(req, res){
  res.render('roadmap');
};

exports.integrations = function(req, res){
  res.render('integrations');
};

exports.specifications = function(req, res){
  res.render('specifications');
};

exports.compatibility = function(req, res){
  res.render('compatibility');
};

