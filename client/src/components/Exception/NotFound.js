import React from 'react';

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-10 my-5 text-center">
          <div className="card">
            <div className="card-body p-5">
              <h1 className="mt-5 mb-3">404</h1>
              <p>Looks like there has been an error. You can choose to go back to dashboard by clicking on the button below.</p>
              <a href="/" className="btn btn-primary mt-5">
                Back to dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
