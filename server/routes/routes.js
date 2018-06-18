var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });
  // POST method route
  app.post('/submit', function (req, res) {
    console.log("Got request...")
    console.log(req.body)
    json = req.body

    console.log(json["name"])
    console.log(json["start"])
    console.log(json["end"])
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(
      { people: [{
        name: json["name"],
        start: json["start"],
        end: json["end"]
        }
        ]
      } 
      ));
  })
}

module.exports = appRouter;
