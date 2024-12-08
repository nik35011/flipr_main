const mongoose = require('mongoose');

// Connect to MongoDB
const connectdatabase = () => {
    mongoose.connect(process.env.DB_URI)
        .then((data) => {
            console.log(`mongodb is connected on server: ${data.connection.host}`);
            // You can start working with your database here
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB', err);
        });
};

module.exports = connectdatabase;
