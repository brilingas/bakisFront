import React, { useEffect,useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import classnames from "classnames";
import axios from "axios";
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);
const API_URL = "http://localhost:8080/locations";
export default function LocationsList() {
  const classes = useStyles();
  const tableCellClasses = classnames(classes.tableCell);
  const [locations,setLocations]=useState([]);
  const getLocations=async()=>{
    await axios.get(API_URL)
    .then((response)=>{
      setLocations(response.data)
    });
  }
  useEffect(() => {
    getLocations();
  }, []);  
  console.log(locations);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Locations</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Location Name", "Address", "Status", "Type", "Contact Person"]}
              tableData={locations.map((location)=>({
                name:location.name,
                address:`${location.address.street}, ${location.address.buildingNumber}-${location.address.apartmentNumber}, ${location.address.city}, ${location.address.country}`,       
                status:location.status,
                type:location.type,
                contactPerson:location.contactPerson
                
              }))}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}