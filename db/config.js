const mongoose = require('mongoose')

const dbConnection = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Database: OK');
        
        
    } catch (error) {
        console.log(error);
        throw new Error(`ERR: `+error);
    }
}

module.exports = dbConnection;