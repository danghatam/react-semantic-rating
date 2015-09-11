import React, {Component} from 'react';
import Rating from './rating';

class Product extends Component {

  rate(point){
    // point param will be passed from Rating module
    // Do something. ex: Actions.rateProduct(productId, point)
  }

  render(){
    return (
      <Rating max={5} rating={4} onRate={this.rate.bind(this)} />
    );
  }
}
