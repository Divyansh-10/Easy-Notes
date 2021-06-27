const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({

  title : String,
  content :
  {
    type : String,
    required : [true, "Content not added yet"]
  }

});

module.exports = mongoose.model("Note" , NoteSchema);
