import React from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports'
import { buyCake } from '../redux';
const HooksCakeContainer = () => {
const numOfCakes = useSelector(state=>state.cake.numOfCakes);
const dispatch = useDispatch();

  return (
     
    <div>
        <h2>Num of Cakes : {numOfCakes}</h2>
        <button onClick={()=>{
            dispatch(buyCake())
        }}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer