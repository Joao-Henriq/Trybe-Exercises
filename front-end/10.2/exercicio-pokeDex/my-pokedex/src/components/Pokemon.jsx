import React from 'react';
import propTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    
    return(
      <div className='pokemon'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ `Average Weight ${averageWeight.value} ${averageWeight.meansurementUnit}` }</p>
        <img src={ image } alt={ name } />
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string,
    type: propTypes.string,
    averageWeight: propTypes.shape({
      value: propTypes.number,
      meansurementUnit: propTypes.string
    }),
    image: propTypes.string.isRequired,
  }).isRequired
}

export default Pokemon;
