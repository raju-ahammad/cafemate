const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isadmin: {
        type: Number,
        default: 0 // 0 = user , 1 = admin
    },
    isartist: {
        type: Number,
        default: 0 // 0 = user , 1 = admin
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model("Users", userSchema);
