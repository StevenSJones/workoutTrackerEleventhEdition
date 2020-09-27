const path = require("path");
//content routes tells server to send index.html to browser
module.exports = (app) => {
  app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
  });
  //content route is defined
  app.get("/exercise", function (req, res) {
    console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!");
    res.sendFile(path.resolve(__dirname, "../public/exercise.html"));
  });
  //The stats content route is defined
  app.get("/stats", function (req, res) {
    console.log("Inside the /api/workouts PUT route!!!!!!!!!!!!");
    res.sendFile(path.resolve(__dirname, "../public/stats.html"));
  });
};
