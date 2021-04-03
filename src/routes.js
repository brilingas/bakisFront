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
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import Maps from "./views/Maps/Maps.js";
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
    name: "Persons List",
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
    name: "Locations List",
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
    name: "Cards List",
    icon: RecentActors,
    component: CardsList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  }, {
    path: "/tables",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  }
];
export default dashboardRoutes;