import React from 'react'
import { useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux'
import { buyCake} from '../redux';
const NewCakeContainer = () => {
    const [value,setValue] = useState(1);
    const numOfCakes = useSelector(state=>state.cake.numOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
        
        <h2>Number of Cakes left  {numOfCakes}</h2>
        <input type="number" value={value} onChange={(event)=>setValue(event.target.value)}/>
        <button onClick={()=>dispatch(buyCake(value))}> Buy {value} Cakes</button>

    </div>
  )
}

export default NewCakeContainer