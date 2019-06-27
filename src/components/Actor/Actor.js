import React from 'react';

import './Actor.scss';

const Actor = ({ imageSrc, name }) => (
  <figure className="actor">
    <div>
      <img className="actor__img" src={imageSrc} alt="actor-pic" />
    </div>
    <h2 className="actor__name">{name}</h2>
  </figure>
);

export default Actor;
