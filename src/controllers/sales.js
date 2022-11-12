const User = require('../models/sales');

const createsales = async (req, res) => {
    const content = req.body;
   
    console.log(content);
    try {

     return res.status(201).json({ data: sales });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
    
   };

   const getAllsales = async (req, res) => {
    try {
    
   
     return res.status(201).json({ data: sales });
    } catch (error) {
     console.log(error);
     return res.status(500).end();
    }
   };

   module.exports = {
    createsales,
    getAllsales,
   };

