var express=require('express');
var session =require('express-session');
var parseurl=require('parseurl');
var path=require('path');
var bodyParser=require('body-parser');

const app=express();
//configure HTTP pipeline 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Session Memory Configuration
var sessionOptions={
   secret:"secret",
   resave:true,
   saveUninitialized:false
};
app.use(session(sessionOptions));

var routes=require("./router");
routes(app);

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000);
console.log("ShoppingCart Web App is listening on port 8000");