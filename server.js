
var express = require("express");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATCH,DELETE,GET');
        res.status(200).json({});
    }
    next();
});

app.get("/", (req, res, next) => {
    // res.set('Access-Control-Allow-Origin', '*'); 
    res.send("Server running");
});

app.post("/tasks", jsonParser, (req, res, next) => {
    res.json(req.body);
});

app.get("/tasks", (req, res, next) => {
    res.send("GET executed on /tasks");
});

app.get('/tasks/:taskId', function(req, res) {
    res.send("GET executed with path variable: " + req.params.taskId);
});

app.put('/tasks/:taskId', jsonParser, function(req, res) {

    const status = req.query.status; // save on status variable if the caller invokes /tasks/100?status=PENDING
    if (status) {
        res.send("PUT invoked with path variable: " + req.params.taskId +
             ", query variable status: " + status + " and body: " + req.body);
    } else {
        res.send("PUT invoked with path variable: " + req.params.taskId + " and body: " + req.body);
    }
});

app.delete('/tasks/:taskId', function(req, res) {
    res.send("DELETE invoked on /tasks/ with path variable:" + req.params.taskId);
});

app.listen(3300, () => {
    console.log("HTTP Server running on port 3300");
});

