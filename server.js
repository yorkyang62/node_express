// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var methodOverride = require('method-override');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var multer = require('multer');
// var errorHandler = require('errorhandler');

// var app = express();

// // all environments
// app.set('port', 8888);
// app.set('views', path.join(__dirname, 'jade'));
// app.set('view engine', 'jade');
// app.use(favicon(path.join(__dirname, 'static/favicon.ico')));
// app.use(methodOverride());
// app.use(session({ resave: true,
//                   saveUninitialized: true,
//                   secret: 'uwotm8'
// }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());
// app.use(express.static(path.join(__dirname, 'static')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(errorHandler());
// }

// app.get("/index.html", function(req, res){
//     res.render("index");
// });
// app.get("/index2.html", function(req, res){
// 	console.log(req.query);
//     res.send("Hello index2");
//     res.end();
// });


// app.listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });



// var express = require('express');
// var app = express();
// var path = require('path');
// var ejs = require('ejs');
// var router = express.Router();
// var param = {};
// app.engine('html', ejs.__express);
// app.set('view engine', 'html');
// app.set('views', __dirname + '/static');
// //app.use(express.static(__dirname,'static'));
// app.use(express.static(path.join(__dirname, 'static')));

// router.get('/test',function(req, res, next){
//   res.render('test', {title: 'HTML'});
//   param = req.query;
//   console.log(param);
// });

// router.get('/index', function (req, res) {
//    res.render('index/index', {title: 'HTML'});
//   console.log(req.query);
// });

// router.get('/index2', function (req, res) {
//    res.render('index2/index2', {title: 'HTML'});
//   console.log(req.query);
// });

// app.use(router);

// var server = app.listen(8888, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("应用实例，访问地址为 http://%s:%s", host, port)
// })
// 
var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8888, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})