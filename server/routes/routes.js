var appRouter = function (app, db) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });
  // POST method route
  app.post('/submit', function (req, res) {
    console.log("Got request...")
    console.log(req.body)
    json = req.body
    name = json["name"]
    start = json["start"]
    end = json["end"]
    db.addShowerTime(name,start,end)
    console.log(json["name"])
    console.log(json["start"])
    console.log(json["end"])
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(
      { people: [{
        name: name,
        start: start,
        end: end
        }
        ]
      } 
      ));
  }),
  app.get("/showertimes", function(req, res){
    db.getAllShowerTimes()
    .then(function(data){
      res.status(200).send({"times":data})
    })
  }),
  app.post('/delete', function (req, res) {
    console.log(req.body["database_id"])
    db.deleteShowerTime(req.body["database_id"])
  })
}

module.exports = appRouter;
