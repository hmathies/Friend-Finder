/*===========================================================================
Requirements for this page:
* A GET Route to `/survey` which should display the survey page.
* A default, catch-all route that leads to `home.html` which displays the home page.
*/
// ===============================================================================
// DEPENDENCIES
//The path package gets the correct file path for our html
// ===============================================================================
var path = require("path");

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../assets/css/style.css"));
  });
};
