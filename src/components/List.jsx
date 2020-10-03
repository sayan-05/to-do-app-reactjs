import React from 'react';
import './List.css'
import DeleteIcon from '@material-ui/icons/Delete';



const List = (props) => {
    return (<>
        <li >{props.text}</li>
        <DeleteIcon className='delete_icon' onClick = {() =>{
            props.onSelect(props.serial)
        }} />
    </>
    )
}

export default List;