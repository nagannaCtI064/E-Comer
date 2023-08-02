import React,{useContext,useState,useEffect} from 'react'
import {store} from './App';
import axios from 'axios';


const Myprofile = () => {
    const [token,setToken] = useContext(store);
    const [data,setData] = useState(null);
    useEffect(() =>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[token])
    if(!token){
        return window.location.replace("/login");
    
    }
    return (
        <div>
            {
               
            <center>
              welcome
            </center>
        }
        </div>
    )
}

export default Myprofile