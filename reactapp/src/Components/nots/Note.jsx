import React from "react";
import Button from '@material-ui/core/Button';

import DeleteOutline from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
  
    return (
        <>
           
               
                <div className=" col-md-3  mx-auto">
                        <div className="note shadow">
                            <h1>{props.title}</h1>
                            <br />
                            <p>{props.content}</p>
                            <Button className="shadow" onClick={()=>{props.deleteItem(props.id)}}>   
                             <DeleteOutline className="delete" ></DeleteOutline>
                            </Button>
                        </div>
</div>
                    
            
        </>
    );
};
export default Note;