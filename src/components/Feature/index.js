import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1 className="title">Torta del dia</h1>
      <p>Torta doble chocolate </p>
      <FeatureButton>Ordena ya</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
