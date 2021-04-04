import React from "react";
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

const useStyles = makeStyles(styles);
export default function CardProfile() {
  const classes = useStyles();
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
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                  labelText="City"
                                                  id="city"
                                                  formControlProps={{
                                                    fullWidth: true
                                                  }}
                                                />
                                              </GridItem>
                                                <GridItem xs={12} sm={12} md={3}>
                                                  <CustomInput
                                                    labelText="Street"
                                                    id="street"
                                                    formControlProps={{
                                                      fullWidth: true
                                                    }}
                                                  />
                                                </GridItem>
                                              <GridItem xs={12} sm={12} md={2}>
                                                <CustomInput
                                                  labelText="Building Number"
                                                  id="building-number"
                                                  formControlProps={{
                                                    fullWidth: true
                                                  }}
                                                />
                                              </GridItem>
                                              <GridItem xs={12} sm={12} md={3}>
                                                <CustomInput
                                                  labelText="Apartment Number"
                                                  id="apartment-number"
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
                                  labelText="Location Name"
                                  id="location-name"
                                  formControlProps={{
                                    fullWidth: true
                                  }}
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