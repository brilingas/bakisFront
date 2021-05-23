import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Poster/Poster.js";
import CardHeader from "../../components/Poster/PosterHeader.js";
import CardAvatar from "../../components/Poster/PosterAvatar.js";
import CardBody from "../../components/Poster/PosterBody.js";
import CardFooter from "../../components/Poster/PosterFooter.js";
import avatar from "../../assets/img/faces/marc.jpg";
import axios from "axios";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const API_URL = "http://localhost:8080/locations";
const useStyles = makeStyles(styles);
export default function LocationProfile() {
  const classes = useStyles();
  const [location, setLocation] =useState(
    {
      address : {
          country : "Congo",
          city : "Chicago",
          street : "John Street",
          buildingNumber : "12",
          apartmentNumber : "34"
      },
      name : "Test office",
      contactPerson : "John Doe",
      status : "OCCUPIED",
      type : "EVENT"
  });
  const handleSubmit = (event) => {
    event.preventDefault();   
    axios.post(API_URL,location)
         .then((response) => {
          console.log("req:");
        })
    }
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Create Location</h4>
            </CardHeader>
            <CardBody>
               <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
                    <Card>
                      <CardHeader color="rose">
                        <h4 className={classes.cardTitleWhite}>Address</h4>
                      </CardHeader>
                      <CardBody>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Country"
                                id="country"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setLocation({...location, address: { ...location.address, country: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="City"
                                id="city"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setLocation({...location, address: { ...location.address, city: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Street"
                                id="street"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setLocation({...location, address: { ...location.address, street: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Building number"
                                id="building-number"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setLocation({...location, address: { ...location.address, buildingNumber: event.target.value } })}   
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <CustomInput
                                labelText="Apartment number"
                                id="apartment-number"
                                formControlProps={{
                                  fullWidth: true
                                }}
                                onChange={(event)=> setLocation({...location, address: { ...location.address, apartmentNumber: event.target.value } })}   
                              />
                            </GridItem>
                        </GridContainer>
                      </CardBody>
                    </Card>
                  </GridItem>
               </GridContainer>
               <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Location name"
                    id="location-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setLocation({...location, name: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Contact person"
                    id="contact-person"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setLocation({...location, contactPerson: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Status"
                    id="status"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setLocation({...location, status: event.target.value})}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Type"
                    id="type"
                    formControlProps={{
                      fullWidth: true
                    }}
                    onChange={(event)=> setLocation({...location, type: event.target.value})}
                  />
                </GridItem>
                </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleSubmit}>Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}