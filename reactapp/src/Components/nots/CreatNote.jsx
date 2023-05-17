import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Note from './Note';
import Search from '../search/Search';
import Menu from '../navigation/Menu';
const CreatNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [items, setItems] = useState([]);

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setNote((prevData) => {

            return {
                ...prevData,
                [name]: value,
            };
        });
    };
    const addEvent = () => {
        setItems((oldItems) => {
            return [...oldItems, note];
        });
        setNote({title:"", content:"",});
    };

    const onDelete = (id) => {
        setItems((oldItems) => {
          return oldItems.filter((currdata, indx) => {
                return indx !== id;
            });
        });
    };
    const onSubmits=(event)=>{
        event.preventDefault();
    }
    return (
        <>
        <Menu/>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-4">
                        <div className="main_note shadow">

                        <form onSubmit={onSubmits}>
                                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title.." autoComplete="off" />
                                <textarea row=" " column="" name="content" value={note.content} onChange={InputEvent} placeholder="write a notes..."></textarea>
                                <Button className="shadow" onClick={addEvent}>
                                    <AddIcon className="plus_sign"></AddIcon>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container ">
                
                
                <div className="row text-center mt-5 pt-5">
                {items.map((val, index) => {
                    return (<Note key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />);
                        
                })}
                </div>
            </div>
            <Search/>
        </>
    );
};
export default CreatNote;
