import React from "react";
import Header from "./header";
import { useAuth } from './hooks/AuthProvider';

const Dashboard = () => {
  const auth = useAuth();

  return (
    <div>
      <header id="header">
        <Header />
      </header>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome</h1>
          <p style={{ fontSize: "50px" }}>{auth.user?.username}</p>
        </div>
        <div className="scroll-down">
          <a href="#saved-fragrances" style={{ fontFamily: "Verdana", fontSize: "45px", color: "#333" }}>↓</a>
        </div>
      </div>

      <p style={{ textAlign: "left", marginLeft: "20px", fontSize: "40px", marginTop: "20px"}}>Your aura.</p>
      
      <section id="saved-fragrances" className="saved-fragrances-section">
        <p style={{ textAlign: "center", fontSize: "35px", marginTop: "20px"}}>Saved Fragrances</p>
      </section>
    </div>
  );
};

export default Dashboard;

/*
import React from "react";
import { useAuth } from './hooks/AuthProvider';

const Dashboard = () => {
  const auth = useAuth();

  console.log("auth ",auth);
  console.log("user",auth.user);

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
*/

