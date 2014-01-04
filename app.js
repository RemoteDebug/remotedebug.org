var express = require('express'),
    routes = require('./routes'),
    lessMiddleware = require('less-middleware');

var app = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);

  app.use(lessMiddleware({
      src: __dirname + '/public',
      compress: true
  }));

  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/roadmap', routes.roadmap);
app.get('/bridges', routes.bridges);
app.get('/specifications', routes.specifications);
app.get('/compatibility', routes.compatibility);
app.get('/polyfils', routes.integrations);
app.get('/integrations', routes.integrations);
app.get('/get-involved', routes.getinvolved);
app.get('/faq', routes.faq);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
