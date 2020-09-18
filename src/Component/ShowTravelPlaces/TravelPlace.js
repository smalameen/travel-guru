import React from "react";
import FakeData from "../../FakeData";
import { Card, ButtonGroup, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const TravelPlace = () => {
  const fakeData = FakeData.slice(0, 3);
  const newData = fakeData.filter(
    (touristPlace) => touristPlace.category === "touristPlace"
  );
  console.log(newData);

  const history = useHistory();

  const handleTravelArea = (id)=> {
    
    const url = `TravelDetails/${id}`
    history.push(url);
    
        
}

  return (
    <div>
      <div className="ml-2 d-flex justify-content-center">
        
        
        <ButtonGroup aria-label="Second group">
          <Link to="/login">
            <Button variant="secondary">Booking Area</Button>
          </Link>

          <Link>
          <Button variant="secondary">Contact with us</Button>
        </Link>

          <Link to="/travelArea">
            <Button variant="secondary">Go to Travel Area</Button>
          </Link>
        </ButtonGroup>
      </div>

      <div
        className="d-flex col-sm-1 col-md-6 col-lg-12"
        style={{ display: "flex", justifyContent: "center", }}
      >
        {newData.map((place) => (
          <Card style={{ width: "18rem", display: "flex", margin: "1rem" }}>
            <Card.Img variant="top" src={place.img} />
            <Card.Body>
              <Card.Title>{place.spotName}</Card.Title>
              <Card.Text>{place.quickText}</Card.Text>
              <Button onClick = {()=> handleTravelArea(place.id)} variant = "primary">Go to Travel Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelPlace;
