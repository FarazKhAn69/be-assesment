const Trade = require('../models/trades');


exports.createTrade = async (req, res) => {
    try {
      const tradeData = req.body;
  
      const newTrade = await Trade.create({
        type: tradeData.type,
        user_id: tradeData.user_id,
        symbol: tradeData.symbol,
        shares: tradeData.shares,
        price: tradeData.price,
        timestamp: new Date(tradeData.timestamp * 1000) 
      });
  
      res.status(201).json(newTrade);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
  exports.getAllTrades = async (req, res) => {
    try {
      const { type, user_id } = req.query;
  
      let whereClause = {};
      if (type) {
        whereClause.type = type;
      }
      if (user_id) {
        whereClause.user_id = user_id;
      }
  
      const trades = await Trade.findAll({
        where: whereClause,
        order: [['id', 'ASC']],
      });
  
      res.status(200).json(trades);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  };
  
exports.getTradeById = async (req, res) => {
  try {
    const tradeId = parseInt(req.params.id);

    const trade = await Trade.findByPk(tradeId);

    if (trade) {
      res.status(200).json(trade);
    } else {
      res.status(404).send('ID not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.methodNotAllowed = (req, res) => {
  res.status(405).send('Method Not Allowed');
};
