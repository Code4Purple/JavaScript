let express = require("express");
let app = express();

app.use(function(req,res,next){
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next(); //pass control to the next handler
});

app.use(express.static("../static"));

app.listen(2000, function(){
    console.log("Serving static on 2,000")
});