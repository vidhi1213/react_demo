import React from 'react';
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import Listcom from './Listcom';
import Menu from '../navigation/Menu';
const ToDo = () => {
 const[inputList,setInputList]=useState("");
 const[Items,setItems]=useState([]);
 const itemEvent=(event)=>{
     setInputList(event.target.value);
 };
 const listOfItems=()=>{
     setItems((oldItems)=>{
         return[...oldItems,inputList];
     });
     setInputList("");
 };

 const deletItem=(id)=>{
     setItems((oldItems)=>{
         return oldItems.filter((arr,index)=>{
             return index !== id;
         })
     })
 }
    return (
        <>
       <Menu/>
            <div className="container bg-light-blue py-5">
                <div className="row mb-5 justify-content-center">
   
                    <div className="main_div text-center">
                        <div className="center_div">
                            
                            <h1 className="h3 mb-4">ToDo list</h1>
                            <input type="text "  placeholder=" Add a Item" value={inputList}  onChange={itemEvent}/>
                            <Tooltip title="Add" aria-label="add">
                            <button onClick={listOfItems}><AddIcon/></button>
                            </Tooltip>
                            <ol>
                               
                               { Items.map((itemval,index)=>{
                                    return <Listcom key={index}
                                     id={index}
                                     text={itemval}
                                      onSelect={deletItem}/>;
                                })}
                            </ol>
                        </div>
                    </div>
                    </div>
            </div>
            
        </>
    );
}
export default ToDo;