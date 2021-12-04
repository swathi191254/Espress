const mongoose = require("mongoose");


const sectionSchema = new mongoose.Schema(
    {
      book_id:{type:mongoose.Schema.Types.ObjectId,ref:"books",required:true},
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
 module.exports = mongoose.model("section", sectionSchema); 