import React, { useState} from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';
const Login = ({
  }) => {
    const [workerId, setWorkerId] = useState("workerId");
    const [cardId, setCardId] = useState("cardId");
   
    const handleSubmit = (event) => {
      event.preventDefault();  
      const worker = {
        workerId:workerId,
        cardId:cardId
      };  
      axios.post(`http://localhost:8080/workers/login`,worker)
        .then((response) => {
          console.log(response);
          // console.log(res.data);
        })
    }
    return(
        <div>
            <Input id="workerId" type="text" placeholder="Worker Id" onChange={(event)=>{setWorkerId(event.target.value)}}/>
            <Input id="cardId" type="text" placeholder="Card Id" onChange={(event)=>{setCardId(event.target.value)}}/>
            <Button tag="a" className="button button-primary button-wide-mobile button-sm" wideMobile onClick={handleSubmit}> Log in </Button>
        </div>
    )
  }
  export default Login;