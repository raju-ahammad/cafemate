const mongoose = require('mongoose')

const worksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please enter title!"],
        trim: true
    },
    image : {
        type: String,
        required: [true, "please enter image!"],
        trim: true
    },
    video: {
        type: String,
        required: [true, "please enter video link"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "please enter description"]
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Works", worksSchema);