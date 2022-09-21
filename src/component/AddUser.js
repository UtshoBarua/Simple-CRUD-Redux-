import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {addUser} from '../feature/Users'; 
function AddUser(props) {
    const [name,setName] = useState("");
    const [user,setUser] = useState("");
    const userList = useSelector((state)=>state.user.value);
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" placeholder='Name' onChange={(event)=>setName(event.target.value)} ></input>
            <input type="text" placeholder='User Name' onChange={(event)=>setUser(event.target.value)} ></input>
            <button onClick={()=>dispatch(addUser({id: userList[userList.length-1].id+1,name:name,username:user}))} >Add User Button</button>
        </div>
    );
}

export default AddUser;