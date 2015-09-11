import React, {Component, PropTypes} from 'react';
import ClassNames from 'classnames';

class Rating extends Component {

    constructor(){
        super();
        this.propTypes = {
            max: PropTypes.number,
            rating: PropTypes.number,
            onRate: PropTypes.func
        };
        this.defaultProps = {
            max: 5,
            rating: 0
        };
    }

    rate(point){
        this.props.onRate(point);
    }

    render(){
        var rating = [];
        for(let i = 0; i < this.props.max; i++){
            let className = ClassNames('icon', {
                'active' : i < this.props.rating
            });
            rating.push(<i className={className} onClick={this.rate.bind(this, i+1)}></i>);
        };
        return (
            <div className="ui star rating">
                {rating}
            </div>
        );
    }
}

export default Rating;
