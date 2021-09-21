const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    image : {
        type: String,
        required: [false, "please enter image!"],
        trim: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("images", imageSchema);