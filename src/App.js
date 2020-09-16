import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import TravelPlace from "./Component/ShowTravelPlaces/TravelPlace";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from "./Component/Destination/Destination";
import BookingArea from "./Component/BookingArea/BookingArea";
import Login from "./Component/LogIn/Login";
import NoMatch from "./Component/NoMatch/NoMatch";
import TravelDetails from "./Component/TravelDetails/TravelDetails";

function App() {
  return (
    <div>
      <Header></Header>
      {/* <TravelPlace></TravelPlace> */}
      <Router>
        <Switch>
          <Route path="/travelArea">
            <TravelPlace></TravelPlace>
          </Route>
          <Route path="/travelDetails/:id">
            <TravelDetails></TravelDetails>
          </Route>
          <Route path="/booking">
            <BookingArea></BookingArea>
          </Route>
          <Route path="/destination">
           <Destination></Destination>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <TravelPlace></TravelPlace>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
