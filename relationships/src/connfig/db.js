const mongoose = require("mongoose");

module.export = () => {
    return mongoose.connect("mongodb://localhost:27017/relationship");
};