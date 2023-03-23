import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const WithAuthenticationRequired = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const { isAuthenticated } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
            <h2
                style={{
                position: 'absolute',
                top: '50%',
                // left: '50%',
                // transform: 'translate(-50%, -50%)',
                zIndex: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '1rem',
                borderRadius: '5px',
                }}
            >
                Please log in to see the full profile
            </h2>
            )}
            <div className={isAuthenticated ? '' : 'blur'} style={{ position: 'relative' }}>
                <WrappedComponent {...props} />
            </div>
        </div>
    );
  };

  return AuthenticatedComponent;
};

export default WithAuthenticationRequired;
