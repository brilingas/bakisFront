import React from "react";
import ChartistGraph from "react-chartist";
import { makeStyles } from "@material-ui/core/styles";
import Event from "@material-ui/icons/Event";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import FileCopy from "@material-ui/icons/FileCopy";
import Info from "@material-ui/icons/Info";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Today from "@material-ui/icons/Today";
import BugReport from "@material-ui/icons/BugReport";
import EmojiPeople from "@material-ui/icons/EmojiPeople";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Card from "../../components/Poster/Poster.js";
import CardHeader from "../../components/Poster/PosterHeader.js";
import CardIcon from "../../components/Poster/PosterIcon.js";
import CardBody from "../../components/Poster/PosterBody.js";
import CardFooter from "../../components/Poster/PosterFooter.js";
import { issues, guests, events } from "../../variables/General.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../../variables/Charts.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { LocationCity } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <FileCopy/>
              </CardIcon>
              <p className={classes.cardCategory}>Total Cards</p>
              <h3 className={classes.cardTitle}>
                49/50
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <LocationCity />
              </CardIcon>
              <p className={classes.cardCategory}>Total Locations</p>
              <h3 className={classes.cardTitle}>999</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Info/>
              </CardIcon>
              <p className={classes.cardCategory}>Total Persons</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Event />
              </CardIcon>
              <p className={classes.cardCategory}>Total Events</p>
              <h3 className={classes.cardTitle}>245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Issues",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={issues}
                  />
                )
              },
              {
                tabName: "Guests",
                tabIcon: EmojiPeople,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={guests}
                  />
                )
              },
              {
                tabName: "Events",
                tabIcon: Today,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1,2]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={events}
                  />
                )
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Statistics</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Registrations</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                style={{fontSize: "0.7em"}}
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                style={{fontSize: "0.7em"}}
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
