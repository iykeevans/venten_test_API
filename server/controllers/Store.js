const db = require('../mockDB/db')

class Store {
  static getProducts(req, res) {
    if(db.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'Nothing in the database add something'
      })
    }
    return res.status(200).json({
      status: 200,
      data: db
    })
  }
}

module.exports = Store;