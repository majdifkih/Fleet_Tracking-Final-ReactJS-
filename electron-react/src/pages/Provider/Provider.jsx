import "./Provider.scss";
import * as React from 'react';
import { useState,useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Popup from "../../components/Popup/Popup";
import FullTable from "../../components/table/FullTable";
import PopupProvider from "../../components/Popup/PopupAddProvider";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import axios from "axios";
 function ProviderTable() {
  const [Providers, setProviders] = useState([]);
  const getProvider=()=>{
    axios.get("http://localhost:3001/SupplierAPI/suppliers").then(res=>{
      if(res.data.success){
        setProviders( res.data.existingPosts);
        
        console.log(Providers)
      }
    })
  } 
  useEffect(()=>{
    getProvider() 
  });  
  const [buttonPopup, setButtonPopup] = useState(false);
  const [addPopupprovider, setAddPopupprovider] = useState(false);
  return (

  <div className="Tabprovidermain">
    <div className="side"><Sidebar/></div>
    <div className="Tabprovider">
    <Navbar/>

<div className="headTabprovider">
      <div className="titleTabprovider">
      Provider
      <div class="input-icone"><input type="Search" placeholder="Search..." className="rech"/>
      <i><SearchIcon/></i></div>
</div>
<div className="butt">
<button className="add" onClick={() => setAddPopupprovider(true)}><PersonAddAltIcon fontSize="small"/>Add</button>
<div className="popprovider">
<PopupProvider trigger={addPopupprovider} setTrigger={setAddPopupprovider}/>
</div>
<button className="del" onClick={() => setButtonPopup(true)} ><DeleteIcon fontSize="small"/>Delete</button>
<Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
</div>
</div>

 <FullTable pos={"non"} rows={Providers} type="non" stat="status" title="Provider name"/>
  </div>
  </div>
  
  );
}
export default ProviderTable
