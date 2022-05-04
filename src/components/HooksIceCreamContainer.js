import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux';

const HooksIceCreamContainer = () => {
    const numOfIceCream = useSelector((state)=>state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
  return (
    <div>
        
    <h2>Number of IceCream : {numOfIceCream}</h2>
    <button onClick={()=>dispatch(buyIceCream())}> Buy Icecream</button>
    </div>
  )
}

export default HooksIceCreamContainer