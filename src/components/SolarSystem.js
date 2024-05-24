import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import './SolarSystem.css';

function SolarSystem() {
  return (
    <>
      <div data-testid="solar-system" />
      <Title headline="Planetas" />
      <div className="planet-container">
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
            size={ planet.size }
          />
        ))}
      </div>
    </>
  );
}

export default SolarSystem;
