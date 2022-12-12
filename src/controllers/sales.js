const Sale = require('../models/sale');
const User = require('../models/user');

const createSale = async (req, res) => {
  const content = req.body;
  const user = await User.findById(content.userId);
  
  try {
    const sale = await Sales.create({ user: content.userId,  ...content 
})
    
    user.sales = user.sales.concat(sale._id)
    await user.save();
    return res.status(201).json({ data: sale });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
  const getAllSales = async (req, res) => {
    const userId = req.body.userId;
    try {
      const sales = await Sale.find({ user: userId });
      return res.status(201).json({ data: sales });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
  
};
module.exports = {
  createSale,
  getAllSales
};