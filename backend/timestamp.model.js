const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeStampSchema = new Schema({
    

        
 }, 
 {
    timestamps: true
}
);



module.exports = mongoose.model("Timestamp", timeStampSchema);


