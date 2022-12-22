const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.DB_CNN);

        console.log('DB Online');
        
    } catch (error) {

        console.log(error);
        throw new Error('Error when initializing database');  
          
    }

}

module.exports = {
    dbConnection,
}