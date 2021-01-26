import React from 'react';

import './Loader.module.scss';

export function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;
