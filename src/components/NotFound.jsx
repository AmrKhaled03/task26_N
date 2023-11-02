// src/components/NotFound.js
import React from 'react';

const NotFound = () => {
  return (
    <div className='m-5 p-5'>
    <div className="container ">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h1 className="display-4">404 - Page Not Found</h1>
          <p className="lead">The page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary rounded">Go to Home</a>
        </div>
      </div>
    </div>

    </div>

  );
};

export default NotFound;
