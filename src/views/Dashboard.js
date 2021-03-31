import React, { useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import axios from 'axios';

const Dashboard = ({
}) => {
  const [workerId, setWorkerId] = useState("workerId");
  const [cardId, setCardId] = useState("cardId");
 
  
  return(
      <div>
          <h1>Dashboard</h1>
      </div>
  )
}
export default Dashboard;






