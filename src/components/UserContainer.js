import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {fetchUsers} from '../redux/index'
const UserContainer = () => {
  const userState = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  useEffect(()=>{dispatch(fetchUsers())},[])
  return ( userState.isLoading?(
    <h2>Loading..</h2>
  )
  :userState.error?(
    <h2>{userState.error}</h2>
  )
  :(
    <div>
      <h2>UserList</h2>
      {userState&&userState.users&&userState.users.map(user=><p key={user.id}>{user.name}</p>)}
    </div>
  )
   
    
  )
}

export default UserContainer