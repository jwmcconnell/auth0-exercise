import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';

function Dogs({ dogs }) {
  console.log(dogs);
  const dogElements = dogs.map(dog => (
    <li key={dog.name}>
      <Dog dog={dog} />
    </li>
  ));

  return (
    <ul>
      {dogElements}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
};

export default Dogs;
