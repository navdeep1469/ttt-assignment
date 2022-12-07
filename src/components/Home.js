import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: "300px", background: "black" }} className="d-flex flex-column">
      <div
        style={{
          background: "white",
          margin: "auto",
          height: "50px",
          width: "50px",
          borderRadius: "50%",
        }}>
        <h2 style={{ fontSize: "xx-large", fontFamily: "auto" }}>ttt</h2>
      </div>
      <div>
        <p style={{ color: "white", marginBottom: "40px", marginTop: "20px" }}>
          In a web of content, a story breaks out. TTT is your one-stop story shop. From ideation to
          delivery - tell us what you need and we'll make it happen.
        </p>
      </div>
      <div>
        <Link to="/chart">
          <Button variant="outline-light" size="lg">
            Click here buddy!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
