import React, { useEffect, useState } from 'react';
import Header2 from "./header2";
import { useAuth } from './hooks/AuthProvider';

const Dashboard = () => {
  const auth = useAuth();
  const username = auth.user?.username;

  const [favoriteFragrances, setFavoriteFragrances] = useState([]);

  // load the user's saved fragrances & populate dashboard
const getUsersFavoriteFragrances = async () => {
  try {
      const response = await fetch(`http://localhost:8080/api/frag/user/favorites?username=${username}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
      });
      const res = await response.json();
      console.log("res", res);
      if (res) {
          console.log("Retrieved user's favorite fragrances", res.message);
          setFavoriteFragrances(res);
          console.log("favorite frags", favoriteFragrances);
          return;
      }
      return res;
  } catch (err) {
      console.error(err);
  }
};

const removeFragranceFromUser = async (fragName) => {
  try {
    console.log("removing fragrance", fragName);
      const response = await fetch("http://localhost:8080/api/frag/remove/user/fragrance", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, Name: fragName }),
      });
      const res = await response.json();
      console.log("res", res);
      if (res.message) {
          console.log("fragrance removed message", res.message);
          setFavoriteFragrances(favoriteFragrances.filter(frag => frag.Name !== fragName));
          alert(res.message);
          return;
      }
      throw new Error(res.message);
  } catch (err) {
      console.error(err);
  }
};

  // Fetch the user's favorite fragrances when the component mounts
  useEffect(() => {
    getUsersFavoriteFragrances();
  }, []);

  return (
    <div>
      <header id="header">
        <Header2 />
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

      <p style={{ textAlign: "center", fontSize: "35px", marginTop: "20px"}}>Saved Fragrances</p>
      
      <section
        id="saved-fragrances"
        className="saved-fragrances-section"
        style={{
          border: "1px solid #C0C0C0", // Dark green border
          borderRadius: "10px", // Rounded corners
          padding: "20px",
          margin: "20px auto", // Center the box horizontally
          width: "50%", // Set a fixed width for the box
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for a clean look
        }}
      >
        <div className="saved-fragrances">
        {favoriteFragrances.length > 0 ? (
          favoriteFragrances.map((fragrance, index) => (
            <div key={index} className="fragrance-item">
              <h3>{fragrance.Name}</h3>
              <p>{fragrance.Brand}</p>
              <p>{fragrance.Notes}</p>
              {fragrance.Images && fragrance.Images.length > 0 && (
                <img src={fragrance.Images[0]} alt={fragrance.Name} />
              )}
              <button onClick={() => removeFragranceFromUser(fragrance.Name)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No saved fragrances found.</p>
        )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;