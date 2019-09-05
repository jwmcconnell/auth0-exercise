import React from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '../Auth0Provider';

function Dog({ dog }) {
  const { isAuthenticated, loading, user } = useAuth0();
  return (
    <>
      <p>owner - {isAuthenticated && !loading ? user.nickname : 'unknown'}</p>
      <p>{dog.name}</p>
    </>
  );
}

Dog.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Dog;
