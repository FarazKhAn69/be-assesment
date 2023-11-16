const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/trades');

router.post('/', tradeController.createTrade);
router.get('/', tradeController.getAllTrades);
router.get('/:id', tradeController.getTradeById);
router.delete('/:id', tradeController.methodNotAllowed);
router.put('/:id', tradeController.methodNotAllowed);
router.patch('/:id', tradeController.methodNotAllowed);

module.exports = router;
