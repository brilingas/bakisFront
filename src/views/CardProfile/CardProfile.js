import React, {useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
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
const API_URL = "http://localhost:8080/cards";
const useStyles = makeStyles(styles);

export default function CardProfile() {
  const classes = useStyles();
  const [card, setCard] =useState(
    {
      validFrom : "2017-03-14",
      validTo : "2017-03-19",
      locationId : "606de7fe543c604fc3a54acc",
      cardType : "FULL_TIME_EMPLOYEE",
      cardAvailability : false,
  }
    );
  const handleSubmit = (event) => {
    event.preventDefault();   
    axios.post(API_URL,card)
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
              <h4 className={classes.cardTitleWhite}>Create Card</h4>
              <p className={classes.cardCategoryWhite}/>
            </CardHeader>
            <CardBody>


              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Valid From"
                    id="valid-from"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Valid To"
                    id="valid-to"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={10}>
                        <Card>
                          <CardHeader color="rose">
                            <h4 className={classes.cardTitleWhite}>Location</h4>
                            <p className={classes.cardCategoryWhite}/>
                          </CardHeader>
                          <CardBody>
                            <GridContainer>
                                    <GridContainer>
                                      <GridItem xs={12} sm={12} md={8}>
                                        <Card>
                                          <CardHeader color="warning">
                                            <h4 className={classes.cardTitleWhite}>Address</h4>
                                            <p className={classes.cardCategoryWhite}/>
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
                                                  onChange={(event)=> setCard({...card, address: { ...card.address, country: event.target.value } })}   
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                  labelText="City"
                                                  id="city"
                                                  formControlProps={{
                                                    fullWidth: true
                                                  }}
                                                  onChange={(event)=> setCard({...card, address: { ...card.address, city: event.target.value } })}   
                                                />
                                              </GridItem>
                                                <GridItem xs={12} sm={12} md={3}>
                                                  <CustomInput
                                                    labelText="Street"
                                                    id="street"
                                                    formControlProps={{
                                                      fullWidth: true
                                                    }}
                                                    onChange={(event)=> setCard({...card, address: { ...card.address, street: event.target.value } })}   
                                                  />
                                                </GridItem>
                                              <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                  labelText="Building Number"
                                                  id="building-number"
                                                  formControlProps={{
                                                    fullWidth: true
                                                  }}
                                                  onChange={(event)=> setCard({...card, address: { ...card.address, buildingNumber: event.target.value } })}   
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={3}>
                                                <CustomInput
                                                  labelText="Apartment Number"
                                                  id="apartment-number"
                                                  formControlProps={{
                                                    fullWidth: true
                                                  }}
                                                  onChange={(event)=> setCard({...card, address: { ...card.address, apartmentNumber: event.target.value } })}   
                                                />
                                              </GridItem>
                                            </GridContainer>
                                          </CardBody>
                                        </Card>
                                      </GridItem>
                                    </GridContainer>
                              <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                  labelText="Location Name"
                                  id="location-name"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                  onChange={(event)=> setCard({...card, address: { ...card.address, country: event.target.value } })}   
                                />
                              </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                  <CustomInput
                                    labelText="Contact Person"
                                    id="contact-person"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                  />
                                </GridItem>
                              <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                  labelText="Status"
                                  id="status"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                  labelText="Type"
                                  id="type"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
                                />
                              </GridItem>
                            </GridContainer>
                          </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Card Type"
                    id="card-type"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Card Availability"
                    id="card-availability"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}