import React, { useState} from 'react';
import Input from './Input';
import Button from './Button';
import axios from 'axios';
import {isWorkerEmpty,updateField} from '../../utils/WorkerUtils'

export default function Signup(){
    const [worker, setWorker]=useState({
        workerId:"",
        personId:"",
        company:"",
        department:"",
        position:"",
        dateOfEmployment:"",
        locationOfOffice:"",
        cardId:"",
        workerType:""
    });   

    const handleSubmit = async (event) => {
      event.preventDefault();   
      if(isWorkerEmpty(worker)){
        alert("Please fill all the fields");
      } else{
        const response=await axios.post(`http://localhost:8080/workers/signup`,worker)
      console.log(response);
      // console.log(res.data);
      }
    }
    return(
        <div>
            <Input id="workerId" type="text" placeholder="Worker Id" onChange={
             (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="personId" type="text" placeholder="Person Id" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="company" type="text" placeholder="Company" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="department" type="text" placeholder="Department" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="dateOfEmployment" type="text" placeholder="Date of employment" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="locationOfOffice" type="text" placeholder="Location of office" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>      
            <Input id="cardId" type="text" placeholder="Card Id" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>
            <Input id="workerType " type="text" placeholder="Worker type" onChange={
              (event)=>{updateField(event,worker,setWorker)}
              }/>      
            <Button tag="signup" className="button button-primary button-wide-mobile button-sm" wideMobile onClick={handleSubmit}> Sign up </Button>
        </div>
    )
  }