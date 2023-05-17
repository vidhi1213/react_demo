import React,{useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Protected =(props)=>{
    let history = useHistory();
let Cmp = props.Cmp
useEffect(()=>{
    if(!localStorage.getItem('result'))
    {
      history.push('/Register');
    }
  },[history]);
    return(
        
            <>
            <Cmp/>
            </>
        
    )
}
export default Protected;
