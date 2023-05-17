
import React from 'react';
//import DeleteIcon from '@material-ui/icons/Delete';

const Listcom = (props) => {
    // const [line, setLine] = useState(false);
    // const cutIt = () => {
    //     setLine(true);
    // };

    return(
        <>
        <div className="todo_style">
            <i class="fa fa-times" arial-hidden="true"
            onClick={()=>{props.onSelect(props.id)}} />
            <li>{props.text}</li>
        </div>
        </>
    )
//     return (
//         <div className="todo_style">
//             <span onClick={cutIt}>
//                 <DeleteIcon className="deleteicon" />
//             </span>

//             <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
//         </div>
//    );
}
export default Listcom;