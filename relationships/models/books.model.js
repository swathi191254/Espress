const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
    {
      name :{ type: String, required: true },
      body: { type: String, required: true },
     
      author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true,
      },
      section_id:{
        type :mongoose.Schema.Types.ObjectId,
        ref:"section",
        required:true,
      }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("books", booksSchema); 