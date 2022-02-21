import './NewData.css'
import "./ShowData.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ListData = (props) => {
    const [keyVal, setKeyVal] = useState(props.keyId);
    const [fstName, setFstName] = useState(props.firstName);
    const [lstName, setLstName] = useState(props.lastName);
    const [emailId, setEmaiId] = useState(props.emailData);
    const [isActive, setIaActive] = useState(false);
    const [btnActive, setbtnActive] = useState(true);
    const dispatch = useDispatch();

    function removeHandler(keyVal) {
        dispatch({
            type: 'DELETE_ITEM', id: keyVal
        });

    }
    const cancelEditHandler = () => {
        setKeyVal(props.keyId);
        setFstName(props.firstName);
        setLstName(props.lastName);
        setEmaiId(props.emailData);
        setbtnActive(true);
        setIaActive(false);
    }
    const editFirstNameHandler = (event) => {
        setFstName(event.target.value);
    }
    const editLastNameHandler = (event) => {
        setLstName(event.target.value);
    }
    const editEmailHandler = (event) => {
        setEmaiId(event.target.value);
    }
    const editActiveHandler = () => {
        setIaActive(true);
        setbtnActive(false);

    }
    function saveEditHandler(keyVal) {
        const newRow = {
            id: keyVal,
            first_name: fstName,
            last_name: lstName,
            email: emailId,
        }
        dispatch({
            type: 'UPDATE_ITEM', newObj: newRow
        });
        setbtnActive(true);
        setIaActive(false);
    }

    return (<>
        <ul key={keyVal}>
            <div className='showdata-item' >
                {/* isActive */}
                <div className="new-newdata__controls" onClick={editActiveHandler}>
                    <div className="new-newdata__control">
                        <input type="text" value={fstName} readOnly={isActive ? false : true} onChange={editFirstNameHandler} />
                    </div>
                    <div className="new-newdata__control">
                        <input type="text" value={lstName} readOnly={isActive ? false : true} onChange={editLastNameHandler} />
                    </div>
                    <div className="new-newdata__control">
                        <input type="email" value={emailId} readOnly={isActive ? false : true} onChange={editEmailHandler} />
                    </div>
                </div>
                {isActive && !btnActive && <button className='showdata-item__btnBlue' style={{}} onClick={() => saveEditHandler(keyVal)} >Save</button>}
                {isActive && !btnActive && <button className='showdata-item__btnRed' onClick={cancelEditHandler} >Cancel</button>}
                {!isActive && btnActive && <button className='showdata-item__btnRed' onClick={() => removeHandler(keyVal)} >Delete</button>}
            </div>
        </ul>

    </>);
}
export default ListData;

