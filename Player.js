import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  jerseyNumber = "N/A",
  age = "N/A",
  imageUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;