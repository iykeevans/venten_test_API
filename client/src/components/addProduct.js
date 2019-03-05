import React, { Component } from 'react'
import axios from 'axios';

export default class addProduct extends Component {
  state = {
    name: undefined,
    description: undefined,
    price: undefined,
    category: undefined,
    image: undefined,
    color: undefined
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    const data = this.state;
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/v1/products', data);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div className="wrapper">
        <form className="form wrapper flexed flexed--col" onSubmit={ this.handleSubmit }>
          <label htmlFor="name" className="form__label">Name:</label>
          <input type="text" id="name" placeholder="Enter Product Name" className="form__input is-curved" onChange={ this.handleChange }/>
          <label htmlFor="description" className="form__label">Description:</label>
          <input type="text" id="description" placeholder="Enter Product Description" className="form__input is-curved" onChange={ this.handleChange }/>
          <label htmlFor="price" className="form__label">Price:</label>
          <input type="number" id="price" placeholder="Enter Product Price" className="form__input is-curved" onChange={ this.handleChange }/>
          <label htmlFor="category" className="form__label">Category:</label>
          <input type="text" id="category" placeholder="Enter Product Category" className="form__input is-curved" onChange={ this.handleChange }/>
          <label htmlFor="image" className="form__label">Image:</label>
          <input type="text" id="image" placeholder="Enter Product Image" className="form__input is-curved" onChange={ this.handleChange }/>
          <label htmlFor="color" className="form__label">Color:</label>
          <input type="text" id="color" placeholder="Enter Product Color" className="form__input is-curved" onChange={ this.handleChange }/>
          <button className="form__button is-curved">Submit</button>
        </form>
      </div>
    )
  }
}
