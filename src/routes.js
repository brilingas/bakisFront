import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import DashboardPage from "./views/Dashboard/Dashboard.js";
import PersonProfile from "./views/PersonProfile/PersonProfile.js";
import TableList from "./views/TableList/TableList.js";
import PersonsList from "./views/PersonsList/PersonsList";
import Icons from "./views/Icons/Icons.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
import LocationProfile from "./views/LocationProfile/LocationProfile.js";
import LocationsList from "./views/LocationsList/LocationsList.js";
import CardProfile from "./views/CardProfile/CardProfile.js";
import CardsList from "./views/CardsList/CardsList.js";
import { AddLocation, HomeWork, Payment, People, PersonAdd, RecentActors } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/person",
    name: "Create Person",
    icon: PersonAdd,
    component: PersonProfile,
    layout: "/admin"
  },
  {
    path: "/persons",
    name: "Persons",
    icon: People,
    component: PersonsList,
    layout: "/admin"
  },
  {
    path: "/location",
    name: "Create Location",
    icon: AddLocation,
    component: LocationProfile,
    layout: "/admin"
  },
  {
    path: "/locations",
    name: "Locations",
    icon: HomeWork,
    component: LocationsList,
    layout: "/admin"
  }, {
    path: "/card",
    name: "Create Card",
    icon: Payment,
    component: CardProfile,
    layout: "/admin"
  },
  {
    path: "/cards",
    name: "Cards",
    icon: RecentActors,
    component: CardsList,
    layout: "/admin"
  }
];
export default dashboardRoutes;