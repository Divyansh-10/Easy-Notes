//Creating Basic Server

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Creates express app
app.use(bodyParser.urlencoded({extended:true}));

//Parse request of content type : application/json
app.use(bodyParser.json());

app.get("/" , (req,res) => {

  res.json({message :"Welcome to EasyNotes Restful API"});
});

//Require Notes route
const notes = require("./app/controller/note.controller.js");

  //Create a new Note
  app.post("/notes" , notes.create);

  //Retrieve notes
  app.get("/notes" , notes.findAll);

  //Retrive a specific note
  app.get("/notes/:noteId" , notes.findOne);

  //Update note with noteId

  app.put("notes/:noteId" , notes.update);

  //Delete a note with note id

  app.delete("notes/:noteId" , notes.delete);






app.listen(3000, () => {

  console.log("Listening on port 3000..");
})

//----------------------------------------------
//Configuring database

const dbConfig = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

//Connecting to database

mongoose.connect(dbConfig.url , {useNewUrlParser : true , useUnifiedTopology: true } , (err) => {

  if(err)
  {
    console.log("Could not connect to database...Exiting now", err);
  }
  else console.log("Successfully connected to Database");

})

//--------------------------------------------------
