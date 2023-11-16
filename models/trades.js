const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Trade = sequelize.define("trade", {
  type: DataTypes.TEXT,
  user_id: DataTypes.NUMBER,
  symbol: DataTypes.TEXT,
  shares: DataTypes.NUMBER,
  price: DataTypes.NUMBER,
  timestamp: {
    type: DataTypes.DATE,
    get() {
      return Math.floor(this.getDataValue('timestamp') / 1000);
    }
  },
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { timestamps: false });

module.exports = Trade;
