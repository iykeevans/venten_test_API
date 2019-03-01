const db = require('../mockDB/db')

class Store {
  static async getProducts(req, res) {
    const data = await db.any('select id, name, price from shoes')
    if(db.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'Nothing in the database add something'
      })
    }
    return res.status(200).json({
      status: 200,
      data
    })
  }

  static async getProduct(req, res) {
    const { id } = req.params;
    const data = await db.one('select * from shoes where id = $1', Number(id))
    if (data) {
      return res.json({
        status: 200,
        data
      });
    }
    return res.json({
      status: 404,
      message: 'Nothing to see here people'
    })
  }
}

module.exports = Store;