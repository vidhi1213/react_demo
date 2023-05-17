import React from 'react';
import { useState } from 'react';
import Sresult from './Sresult';
const Search =()=>{
const[img, setImg]=useState("");
const InputEvent=(event)=>{
    const value=event.target.value;
    setImg(value);
}

    return(
        <>
        <div className="container ">
            <div className="row text-center">
                <div className="col-12 mb-5 pt-5">
                    <input type="text"
                        placeholder="search Anything"
                        value={img}
                        onChange={InputEvent}
                    />
                    </div>
                    <div className="col-12">
                    {img === "" ? null: <Sresult name={img}/>}
                   
                    </div>
                

            </div>
        </div>
        </>
    )
}
export default Search;