import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, size } = this.props;
    const cardClassName = `planet-card_${size}`;
    return (
      <div data-testid="planet-card">
        <p className="planet-name" data-testid="planet-name">{planetName}</p>
        <img
          className={ cardClassName }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'small2', 'medium', 'medium2', 'large']).isRequired,
};

export default PlanetCard;
