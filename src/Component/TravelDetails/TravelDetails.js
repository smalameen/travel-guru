import React from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import FakeData from "../../FakeData";
import { Button, Card } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  
  


const TravelDetails = () => {

  const history = useHistory();
// const handleTheJourneyButton =()=> {
//   const url = `/login`;
//   history.push(url);
// }
    const classes = useStyles();
  const  {id} = useParams();
  console.log(id);

  const detailsData = FakeData.find(tr => tr.id == id)
  console.log(detailsData);
  
  return (
    <div className ="col-lg-6  d-flex justify-content-center">

        <div className="ml-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={detailsData.img} />
        <Card.Body>
          <Card.Title>{detailsData.spotName}</Card.Title>
          <Card.Text>{detailsData.quickText}</Card.Text>
        </Card.Body>
      </Card>
    </div>


    <div className="ml-4 border p-5">
        <h1>Your traveling Details </h1>
    <form className={classes.container} noValidate>
        <h5>Origin</h5>
        <Input defaultValue="Dhaka" required placeholder="Input the Departure"> </Input> 
        <Input defaultValue={detailsData.spotName} required placeholder="Input the Destination"> To</Input> <br/> <br/> <br/>
      <TextField
        id="datetime-local"
        label="From"
        type="datetime-local"
        defaultValue="2020-16-24T10:30"
       
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> <br/> <br/>
      <TextField
        id="datetime-local"
        label="To"
        type="datetime-local"
        defaultValue="2020-16-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      /> <br/> <br/>

      <Route render = {() => (
      <Button onClick = {()=>{history.push('/login')}} className="mt-4" variant = "primary"> Start Booking</Button>
      )}/>
    </form>
    </div>


   </div>
  );
};

export default TravelDetails;
