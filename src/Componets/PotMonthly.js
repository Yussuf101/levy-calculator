import React from "react";
import{useState} from "react";


const PotMonthly=()=>{
const[potAmount, setPotAmount]=useState('')
const[monthlyAmount, setMonthlyAmount]=useState('')


   return (
    <>
    <div className=" container">
      <div className="pot">
        <p> How much is currently in your Pot?   {potAmount} <input id="potAmount" placeholder="Enter Amount" onChange={(e)=> setPotAmount(e.target.value)}/></p>
        <div className="montly">
          <p> How much is Monthly pay in? {monthlyAmount}  <input  id="MonthlyAmount" placeholder="Enter Amount" onChange={(e)=> setMonthlyAmount(e.target.value)}/></p>
          </div>
        </div>
      </div>
    </>
    )
};

export default PotMonthly;