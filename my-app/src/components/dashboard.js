/*
import React, { useEffect } from "react";
import { useAuth } from './hooks/AuthProvider';

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <div>
        <h1>Welcome! {auth.user?.username}</h1>
        <button onClick={() => auth.logOut()} className="btn-submit">
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
*/

import React from "react";
import { useAuth } from './hooks/AuthProvider';

const Dashboard = () => {
  const auth = useAuth();

  // Example static images
  const images = [
    require("../assets/images/img1.jpg"),
    require("../assets/images/img2.jpg"),
    require("../assets/images/img3.jpg"),
    require("../assets/images/img4.jpg"),
    require("../assets/images/img5.jpg"),
    require("../assets/images/img6.jpg"),
    require("../assets/images/img7.jpg"),
    require("../assets/images/img8.jpg"),
    require("../assets/images/img9.jpg"),
  ];
  
  return (
    <div className="container">
      <div>
        <h1>Welcome! {auth.user?.username}</h1>
        <button onClick={() => auth.logOut()} className="btn-submit">
          logout
        </button>
      </div>
      <div className="photo-grid">
        {images.map((src, index) => (
          <div className="grid-item" key={index}>
            <img src={src} alt={`Static ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

