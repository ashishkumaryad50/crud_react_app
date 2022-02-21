import React, { useState } from 'react'
import './NewData.css'
import { useSelector, useDispatch } from "react-redux";

const NewData = (props) => {
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');

    const dispatch = useDispatch();

    const firstNameChangeHandler = (event) => {
        setfirstName(event.target.value);
    }
    const lastNameChangeHandler = (event) => {
        setlastName(event.target.value);
    }
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const listData = useSelector((state) => state.data);
    console.log(listData)
    const newId = listData.length + 1
    const submitHandler = (event) => {
        event.preventDefault();
        // console.log("submitted")
        const list = {
            id: newId,
            first_name: firstName,
            last_name: lastName,
            email: enteredEmail,
        }
        console.log(list)

        dispatch({
            type: 'DATA_ADDED', items: list
        });

        setfirstName('');
        setlastName('');
        setEnteredEmail('');

    }
    const resetHandler = () => {
        setfirstName('');
        setlastName('');
        setEnteredEmail('');
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new-newdata__controls">
                    <div className="new-newdata__control">
                        <label htmlFor="">First Name</label>
                        <input type="text" value={firstName} onChange={firstNameChangeHandler} />
                    </div>
                    <div className="new-newdata__control">
                        <label htmlFor="">Last Name</label>
                        <input type="text" value={lastName} onChange={lastNameChangeHandler} />
                    </div>
                    <div className="new-newdata__control">
                        <label htmlFor="">Email</label>
                        <input type="email" value={enteredEmail} onChange={emailChangeHandler} />
                    </div>
                </div>
                <div className='container'>
                    <button className='butRed' type='reset' onClick={resetHandler} >Cancel</button>
                    <button className='butBlue' type='submit'>Add Data</button>
                </div>
            </form>
        </>
    );
}

export default NewData;
