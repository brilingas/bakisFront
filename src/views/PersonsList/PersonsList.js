import React, { useEffect,useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
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
const API_URL = "http://localhost:8080/persons";
export default function PersonsList() {
  const classes = useStyles();
  const tableCellClasses = classnames(classes.tableCell);
  const [persons,setPersons]=useState([]);
  const getPersons=async()=>{
    await axios.get(API_URL)
    .then((response)=>{
      setPersons(response.data)
    });
  }
  useEffect(() => {
    getPersons();
  }, []);  
  console.log(persons);
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Persons</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Surname", "Birthday", "Phone Number", "Email", "Photo", "Signature", "Address", "Gender"]}
              tableData={persons}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>    
  );
}
PersonsList.propTypes = {
  personsIndexes: PropTypes.arrayOf(PropTypes.number),
  persons: PropTypes.arrayOf(PropTypes.node),
  checkedIndexes: PropTypes.array
};