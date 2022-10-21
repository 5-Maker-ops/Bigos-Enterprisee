const express = require('express');
 const app = express();
 
 const connect = require('./modules/connect');
 
 
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));

 
 
 
 app.get('/', (req, res) => {
  res.status(200).json({ message: 'Peace' });
 });
   // Connect to Database
   void (async () => {
    try {
     await connect();
     console.log('connected to database');
    } catch (error) {
     console.log('error connecting to database:', error.message);
    }
   })();

   
 
 
 module.exports = app;