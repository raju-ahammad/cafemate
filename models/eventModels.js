const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: [true, "Please enter Event Name!"],
        trim: true
    },
    eventtime: {
        type: String,
        required: [true, "Please enter Event Time!"],
        trim: true
    },
    song: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Song'
    }]
    
},
{
    timestamps: true
})

module.exports = mongoose.model("Events", eventSchema);