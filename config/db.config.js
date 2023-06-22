const mongoose = require('mongoose'); 
require('dotenv').config({path: '.env'}); 

const connection = async ()=>{
    try {
        await mongoose.connect(process.env.DB_MONGO); 
        console.log('Connection succesfull'); 
    } catch (error) {
        console.log(`Connection failed ${error}`);
        process.exit(1); 
    }
}

module.exports = connection; 