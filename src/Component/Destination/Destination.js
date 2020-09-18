import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import FakeData from '../../FakeData';
import { Card } from 'react-bootstrap';

const mapStyles = {
  
  width: '30%',
  height: '100%',
  backgroundColor: 'red'
};

export class MapContainer extends Component {
   
  render() {
       const fakeDataForBed = FakeData.slice(3,6);
    const newBedData = fakeDataForBed.filter(bed => bed.category === "HotelRoom" );
    console.log(newBedData);
    return (
      <div className="container d-flex  justify-content">
          <div>
              {
                  newBedData.map(bed =>   <Card style={{ width: "18rem", display: "flex", margin: "1rem" }}>
                  <Card.Img variant="top" src={bed.img} />
                  <Card.Body>
                    <Card.Title>{bed.spotName}</Card.Title>
                    <Card.Text>{bed.quickText}</Card.Text>
                  </Card.Body>
                </Card>)
              }
          </div>


          {/* // map area is here */}
          <div>
          <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
          </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDazbXSxF7qfUmXfC8Rf3CEr0fU3syWLUw'
})(MapContainer);
