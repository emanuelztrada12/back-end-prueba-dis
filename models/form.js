const mongoose = require('mongoose'); 

const form = mongoose.Schema({
    name: {
        type: String, 
        trim: true, 
    }, 
    lastname: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    birthday: {
        type: String,
        trim: true,
    },
    servicesProduct: {
        type: String,
        trim: true,
    },
    mount: {
        type: Number,
        trim: true,
    }
})

module.exports = mongoose.model("form", form);