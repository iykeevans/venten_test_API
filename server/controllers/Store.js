const db = require('../mockDB/db')

class Store {
  static async getProducts(req, res) {
    try {
      const data = await db.any('select id, name, price from shoes');

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
    } catch (error) {
      return res.json({
        status: 500,
        error
      })
    } 
  }

  static async getProduct(req, res) {
    const { id } = req.params;
    try {
      const data = await db.one('select * from shoes where id = $1', Number(id));

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

    } catch (error) {
      return res.json({
        status: 500,
        error
      })
    }
  }

  static async addProduct(req, res) {
    const query = `INSERT INTO
      shoes(name, description, price, category, image, color)
      VALUES($<name>, $<description>, $<price>, $<category>, $<image>, $<color>)`;
    try {
      const data = await db.none(query, req.body);

      return res.json({
        status: 201,
        data: req.body,
        message: 'successfully added product'
      })
    } catch (error) {
      return res.json({
        status: 500,
        error
      })
    }
  }
}

module.exports = Store;