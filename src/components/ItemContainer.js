
import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
     <h2>Item = {props.item}</h2>
     <button onClick={props.buyItem}>Buy Item</button>
    </div>
  );
};
const mapToStateToProps = (state,ownProps) => {
  const itemState = ownProps.cake
  ? state.cake.numOfCakes
  : state.iceCream.numOfIceCreams;
  return{
      item:itemState
  }
};

const mapToDispatchToProps=(dispatch,ownProps)=>{
  const dispatchFunctions = ownProps.cake?
  ()=>dispatch(buyCake())
  :()=>dispatch(buyIceCream())

  return {
    buyItem:dispatchFunctions
  }
  

}


export default connect(mapToStateToProps,mapToDispatchToProps)(ItemContainer);
