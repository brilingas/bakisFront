import React, { useState} from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';
import {isWorkerEmpty,updateField} from '../../utils/WorkerUtils'

export default function Login(){
    const [worker, setWorker]=useState({workerId:"", cardId:""});   

    const handleSubmit = async (event) => {
      event.preventDefault();        
      if(isWorkerEmpty(worker)){
        alert("Please fill all the fields");
      } else{
        const response=await axios.post(`http://localhost:8080/workers/login`,worker)
        console.log(response);
        // console.log(res.data);
      }
    }

    return(
        <div>
            <Input id="workerId" type="text" placeholder="Worker Id" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="cardId" type="text" placeholder="Card Id" onChange={     
              (event)=>{updateField(event,worker,setWorker)}
            }/>
            <Button tag="a" className="button button-primary button-wide-mobile button-sm" wideMobile onClick={handleSubmit}> Log in </Button>
        </div>
    )
  }