import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import {deleteUser,updateUser} from '../feature/Users'
import {useDispatch} from 'react-redux';


function UserList(props) {
    const userList = useSelector((state)=>state.user.value)
    console.log(userList)
    const dispatch = useDispatch();
    const [newUser,setNewUser] = useState("");
    return (
        <div>
            {
                userList.map((user,key)=>{
                    return(
                        <div style={{border:"1px solid #eee"}} key={user.id} >
                        
                        <h2> Id: {user.id} </h2>
                        <h2> Name:{user.name} </h2>
                        <h2> User Name:{user.username} </h2>
                        <input type="text" placeholder='Update User Name...' onChange={(event)=>setNewUser(event.target.value)} ></input>
                        <button onClick={()=>dispatch(updateUser({id:user.id,name:newUser}))} >Update Button</button>
                        <button onClick={()=>dispatch(deleteUser({id:user.id}))} >Delete Button</button>
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default UserList;