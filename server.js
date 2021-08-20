
var express = require("express");
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.get("/", (req, res, next) => {
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

