import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const WithAuthenticationRequired = (Component) => {
  return withAuthenticationRequired(Component, {
    onRedirecting: () => <div>Loading...</div>,
  });
};

export default WithAuthenticationRequired;