/*===========================================================================
Requirements for this page:
* A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
* A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be
-used to handle the compatibility logic.
*/
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);

  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
//take in data from survey, This route will also be used to handle the compatibility logic.
//for each or for in loop over the friends data
//do the .push last--look up absolute value in js
    var newfriendsData = req.body;
    console.log(newfriendsData);
    var newFriendTotal = 0;
    for(i in newfriendsData.scores){
      newFriendsTotal += newFriendsData.scores[i];
    }
    var bestFriend;
    var bestFriendDiff;
    for (i in friendsData){
      var total = 0
      for(j in friendsData[i].scores){
        total += friendsData[i].scores[j];
      }
    var diff = Math.abs(newFriendsTotal - total);
    if(bestFriendDiff === null || bestFriendDiff > diff){
      bestFriend = friendsData[i];
      bestFriendDiff = diff;
    }
    };
    console.log(total / friendsData.length);
    friendsData.push(newfriendsData);
    res.json(bestFriend);

//the below loop isn't wokring and the error is saying that it can't convert object to a primitive value




    //send back the matched friend info /make sure the field i send back to the request has a name and a photo
  });

};
