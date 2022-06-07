import React from "react";
import "./Popupform.scss";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import axios from "axios";
import { useState } from "react";
function PopupEditDriver(props){
    const [newDemail, setnewDemail] = useState("");
    const [newDname, setnewDname] = useState("");
    const [newDtelf, setnewDtelf] = useState("");
    const [newDpassword, setnewDpassword] = useState("");
    const [newDaddress, setnewDaddress] = useState("");
    const [newidDriver, setnewidDriver] = useState("");
    const updateDriver = async(ID) => {
        const dataD = {email:newDemail,
            name:newDname ,
            telf:newDtelf ,
            address:newDaddress,
            idDriver:newidDriver,
            password:newDpassword,
            }
       await axios.put(`http://localhost:3001/DriverAPI/drivers?id=${ID}`,dataD).then((res) => {
                if (res.data.status === 'success') {
                  console.log("ok")
                }
                 }   ).catch((err) => {  console.log(err) }  )
          }
    
    return (props.trigger) ? (
        <div className="popupa">
        <div className="popup-innera">
        <h3> Edit Driver</h3>
            <div className="formulera">
            <div className="formleft">
        <div className="form">
        <label for="namea"/>Driver Name
        <div className="formicon">
        <PersonOutlineIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewDname(event.target.value);
}} placeholder="Edit Name" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Password
        <div className="formicon">
        <LockIcon className="icona" fontSize="small"/><div className="forma"><input type="password" onChange={(event)=> {
  setnewDpassword(event.target.value);
}} placeholder="Edit Password" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>ID
        <div className="formicon">
        <BadgeOutlinedIcon className="icona" fontSize="small"/> <div className="forma"><input onChange={(event)=> {
  setnewidDriver(event.target.value);
}} type="text" placeholder="Edit ID" /></div>
        </div>
        </div>
        </div>
        <div className="formright">

        <div className="form">
        <label for="namea" />Email
        <div className="formicon">
        <MailOutlineIcon className="icona" fontSize="small"/><div className="forma"><input onChange={(event)=> {
  setnewDemail(event.target.value);
}} type="text" placeholder="Edit Email" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Address
        <div className="formicon">
        <PersonPinCircleIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewDaddress(event.target.value);
}} placeholder="Edit Address" /></div>
        </div>
        </div>
        <div className="form">
        <label for="namea"/>Phone Number
        <div className="formicon">
        <PhoneIphoneIcon className="icona" fontSize="small"/><div className="forma"><input type="text" onChange={(event)=> {
  setnewDtelf(event.target.value);
}} placeholder="Edit Number" /></div>
        </div>
        </div>
        </div>
        </div>
            <div className="buttonpopa">
            <button className="cancel-btn" onClick={() => props.setTrigger(false)}>Cancel </button>
            <button className="btna" onClick={()=> updateDriver(props.id)} >EDIT</button>
            </div>
            
        </div>

    </div>
) : "";
}
export default PopupEditDriver;