var appRouter = function (app) {
  app.get("/", function(req, res) {
    res.status(200).send("Welcome to our restful API");
  });
  // POST method route
  app.post('/submit', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(
      { people: [{
        name: 'Anders',
        start: '07.15',
        end: '07.30'
        }
        ]
      } 
      ));
  })
}

module.exports = appRouter;
