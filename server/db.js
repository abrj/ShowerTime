var sqlite3 = require('sqlite3').verbose();
var datetime = require('node-datetime');
var db = null
var users = {}

module.exports = {
  setup: function(path, users, useExisting){
      db = new sqlite3.Database(path);
      if(useExisting){
        console.log("Using existing database found at : " + path)
        
      } else {
      console.log("Creating new database!")
      var users = users
      db.serialize(function() {
        db.run('CREATE TABLE users ('+
          'id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,'+
          'name TEXT NOT NULL);')

        db.run('CREATE TABLE showertimes ('+
          'id integer not null primary key AUTOINCREMENT,'+
          'name TEXT not null,'+
          'start TEXT NOT NULL,'+
          'end TEXT NOT NULL,'+
          'date TEXT NOT NULL,'+
          'foreign key(name) references users(name));')

        users.forEach(function(name){
          db.run('INSERT INTO users(name) VALUES ("'+name+'");')
        })
        db.each("SELECT id, name FROM users", function(err, row) {
            console.log(row.id + ": " + row.name);
        });
      });
      }
    //db.close();
  },
  addShowerTime: function(name, start, end){
      var dt = datetime.create();
      console.log(dt.now())
      var now = dt.format('d/m/Y-H:M:S');
      console.log(now)
      db.run('INSERT INTO showertimes(name,start,end,date) VALUES ("'+name+'","'+ start +'","'+ end +'","'+ now +'");')
      console.log("inserted new showertime")
  },

  getAllShowerTimes: function(){
    return new Promise(function (resolve, reject) {
      db.all(`SELECT id as i,
                    name as n,
                    date as d,
                    start as s,
                    end as e
             FROM showertimes`, (err, times) => {
        if (err) {
          console.error(err.message);
          reject(times);
        } else{
          resolve(times)
        }
      });
                
      });
  },

  deleteShowerTime: function(id){
    console.log("DELETING showertime with ID: " + id)
    db.run('DELETE FROM showertimes WHERE id='+id)
  },
  
  getAllUsers: function(){
    db.each(`SELECT Id as id,
                  Name as name
           FROM users`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.name);
    users[row.name] = row.id
  });

  }
} 

function getUserIdFromName(name,db){
  db.run('SELECT id from users WHERE name="'+name+'"', function(err, row) {
    console.log(row)
    return row
  })

}
