import "./store.scss"
import store from './store.png'
import {
  Box,
  SkeletonText,
} from '@chakra-ui/react'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,

} from '@react-google-maps/api'
import { useRef, useState,useEffect } from 'react'
import axios from "axios"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableMap from "../../components/table/TableMap";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const center = { lat: 35.523916, lng: 11.030870 }

function Store() {

  const [rows,setRows] = useState([]);

  const getStore=()=>{
    axios.get("http://localhost:3001/StoreAPI/stores").then(res=>{
      if(res.data.success){
        setRows( res.data.existingPosts);
        
        console.log(rows)
      }
    })
  } 
  useEffect(()=>{
    getStore() 
  });   


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBetB4HIZtbvPihf1OFkUkZhRdtw9-5U8s",
    libraries: ['places'],
  })




  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }


  
  return (
    <div className="storemain">
      <div className="side"><Sidebar/></div>
    <div className="store">
    <Navbar/>
        <span className="titlemap">Stores</span>
        <Link to="/storetable"> <button className="back"><ArrowBackIcon className="iconback"/></button></Link>
        <div className="storecenter">
    <div className="storeleft">
        
    
      
          
   
      <div className="title">Map<br/><span>Stores</span></div>
      <Box   h='90%' w='90%' p={10}>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={8}
          mapContainerStyle={{ width: '110%', height: '102%' }}
          options={{
            zoomControl: true,
            streetViewControl: true,
            mapTypeControl: true,
            fullscreenControl: true,
          }}
        >
          <Marker position={center} 
            icon ={
              {     
                   url:store,
                   scaledSize: new window.google.maps.Size(50,50)
                   
               }
               } 
        />
         
        </GoogleMap>
      </Box>
     
   
    
    
    </div>
    <div className="liststore">
    <div className="storetabHead">
        <div className="storetab">
        <div className="listTitlestore">Stores <span>(20)</span></div>
        <Link to="/storetable"> Voir tout</Link>
        </div>
        <div className="input">        <div class="input-icone">
<input type="Search" placeholder="Search..."/>
<i><SearchIcon/></i>
</div></div>

        </div>
        <TableMap rows={rows}/>
        
        </div>
        </div>
     </div>
    </div>
   
  )
}

export default Store