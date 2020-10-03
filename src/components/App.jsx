import React from 'react';
import './App.css'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import List from './List'
import { useState } from 'react';



const App = () => {

    const [initialValue, finalValue] = useState('')

    const [listData, dataArray] = useState([])

    const inputValue = (event) => {
        finalValue(event.target.value)
    }

    const fetchData = () => {
        dataArray([...listData, initialValue])
        finalValue('')
    }

    const deleteItems = (serial) => {
        dataArray((listData) => {
            return listData.filter(
                (arrEle, index) => {
                    return index !== serial;
                }
            )
        })
    }

    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Exo:wght@900&display=swap" rel="stylesheet" />
            <div className='main_div' >
                <h1> To-Do-List</h1>
                <input type="text" placeholder='Write task here!' className='input' onChange={inputValue} value = {initialValue}  />
                <AddCircleOutlineIcon className='add_button' onClick={fetchData} />
                <ul>
                    {listData.map((arrayList, index) => {
                        return (
                            <List className='list' serial={index} key={index} text={arrayList} onSelect={deleteItems} ></List>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    )
}







export default App;