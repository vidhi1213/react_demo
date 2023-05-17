import React from 'react';
import Images from './Images';
import Head from './Head';

const Card = (props) => {



    return (
<>
        <div className=" col-md-3 col-10 mx-auto">
            <div className="card  mb-2">
              <Images imgsrc={props.imgsrc}/>
                <div className="card-body">
                <Head title={props.title}/>
                    <a href={props.link} target="_vdh">
                        <button type="button" className="btn btn-outline-success">Watch more</button>
                    </a>
                </div>
            </div>
        </div>
</>

    );
}
export default Card;