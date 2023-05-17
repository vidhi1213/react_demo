import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Pokemon =()=>{
    const[num,setNum]=useState();
    const[name,setName]=useState();
    const[moves,setMoves]=useState();

    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name);
            setMoves(res.data.moves.length);

        }

        getData();
    });
    return(
<>

<div className="container bg-light-blue mt-5 pt-5">
                <div className="row mb-5 justify-content-center">
                <div className="col-10 text-center">
                <h1>You choose<span style={{color:"red"}}></span> {num} value</h1>
                </div>
                <div className="col-10 text-center">
                <h1>You choose<span style={{color:"red"}}></span>  {name} </h1>
                </div>
                <div className="col-10 text-center">
                <h1>You choose<span style={{color:"red"}}></span> {moves} moves</h1>
                </div>
                <div className="col-10 text-center">
<select value={num} onChange={(event)=>{
setNum(event.target.value);
}}>
<option value="30">30</option>
<option value="25">25</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>
</div>
</div>
</>
    );
}
export default Pokemon;