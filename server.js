// ==============================================================================
// DEPENDENCIES
// Series of npm packages to give the server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port to use later
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below points the server to a series of "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

//the app.listen code needs to always be at the bottom
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
