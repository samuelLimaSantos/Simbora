import React, { Component } from "react";
import axios from "axios";

export default class Idea extends Component {
  state = {
    product: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3333/ideas/id/${id}`);

    this.setState({ product: response.data });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="product-info">
        {product.map((item) => {
          return (
            <div>
              <div className="option-header">
                {console.log(item)}
                <h1>{item.title}</h1>
              </div>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
