import React from 'react';
import Input from './Input';
import Button from './Button';
const Signup = ({
  }) => {
    return(
        <div>
            <Input id="workerId" type="workerId" placeholder="Worker Id"/>
            <Input id="personId" type="personId" placeholder="Person Id"/>
            <Input id="company" type="company" placeholder="Company"/>
            <Input id="department" type="department" placeholder="Department"/>
            <Input id="position" type="position" placeholder="Position"/>
            <Input id="dateOfEmployment" type="dateOfEmployment" placeholder="Date of employment"/>
            <Input id="locationOfOffice" type="locationOfOffice" placeholder="Location of office"/>
            <Input id="cardId" type="cardId" placeholder="Card Id"/>
            <Input id="workerType" type="workerType" placeholder="Worker type"/>
            <Button tag="signup" className="button button-primary button-wide-mobile button-sm" wideMobile onClick={()=>console.log("Signup")}> Sign up </Button>
        </div>
    )
//workerid,personid,company,department,position, dateofemployment, loactionofoffice,cardid, worker type
//pagal WorkerEntity laukai
  }
  export default Signup;