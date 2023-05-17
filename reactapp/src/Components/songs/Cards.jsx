
import React from 'react';
import Card from './Card';
import Music from './Music';
import Sdata from './Sdata';
import Menu from '../navigation/Menu';
const Cards=()=> {
    
   
     
        return (
            <>
            <Menu/>
            <div className="container ">
                
                
                <div className="row text-center">
                <Music/>
                    {Sdata.map((val)=>{
                        return(
                            <Card 
                            key={val.key}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            link={val.link}

                            />
                        );
                    })}
                </div>
            </div>
           </>
        );
    
}
export default Cards;