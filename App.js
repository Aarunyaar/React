import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import internalImage from './images/image-nature.jpg';

function App() {
  console.log("React app started");

  const userName = "Aarunya";

  return (
    <div className="container mt-5">
      <div className="card text-center p-3">

        <h3 style={{ color: 'purple' }}>
          Welcome to React Learning, {userName}
        </h3>

        <img
          src={internalImage}
          alt="Internal"
          className="img-fluid mx-auto my-2"
          style={{ width: '200px' }}
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="External"
          className="img-fluid mx-auto my-2"
          style={{ width: '200px' }}
        />

        <p className="text-secondary">
          This is your first card with images and styles!
        </p>

      </div>
    </div>
  );
}

export default App;
