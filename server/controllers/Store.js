const db = require('../mockDB/db')

class Store {
  static getProducts(req, res) {
    const data = [];
    db.forEach(product => {
      const { id, Name, Price} = product;
      data.push({ id, Name, Price});
    });
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

  static getProduct(req, res) {
    const { id } = req.params;
    const data = db.find(product => product.id === id);
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