var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('views'));

var port = process.env.PORT || 3000;
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});

app.get('/',function(req,res){
    res.render('heatmap.html')
});