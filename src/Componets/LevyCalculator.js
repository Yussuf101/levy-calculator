import React from "react";
import{useState} from "react";
import './LevyCalculator.css';

const LevyCalaculator=()=>{
    const[jannumber,setJanNumber]= useState(0)
    const[febnumber,setFebNumber]= useState(0)
    const[marnumber,setMarNumber]= useState(0)
    // const[aprnumber,setAprNumber]= useState(0)
    // const[maynumber,setMayNumber]= useState(0)
    // const[junnumber,setJunNumber]= useState(0)
    // const[julnumber,setJulNumber]= useState(0)
    // const[augnumber,setAugNumber]= useState(0)
    // const[sepnumber,setSepNumber]= useState(0)
    // const[octnumber,setOctNumber]= useState(0)
    // const[novnumber,setNovNumber]= useState(0)
    // const[decnumber,setDecNumber]= useState(0)

    const[potAmount, setPotAmount]=useState(0)
    const[monthlyAmount, setMonthlyAmount]=useState(0)
    const janClosingBal = (potAmount+monthlyAmount)-(jannumber*1200)
    

 


    return (
        <>
        <div className=" container">
          <div className="pot">
            <p> How much is currently in your Pot?    <input id="potAmount" placeholder="Enter Amount" onChange={(e)=> setPotAmount(potAmount.e.target.value)}/></p>
            {/* <input id="integer" placeholder="Enter Amount" onChange={(e)=> setPotInput(e.target.value)}/> */}
            <div className="montly">
              <p> How much is Monthly pay in?   <input  id="MonthlyAmount" placeholder="Enter Amount" onChange={(e)=> setMonthlyAmount(monthlyAmount.e.target.value)}/></p>
              
              <br></br>
              <br></br>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Months</th>
                    <th scope="col">Jan
                    <button onClick={()=> setJanNumber(jannumber + 1)}>+</button>
                    <button onClick={()=> setJanNumber(jannumber - 1)}>-</button>
                    <button onClick ={()=> setJanNumber(0)}>0</button></th>
                    <th scope="col">Feb
                    <button onClick={()=> setFebNumber(febnumber + 1)}>+</button>
                    <button onClick={()=> setFebNumber(febnumber - 1)}>-</button>
                    <button onClick ={()=> setFebNumber(0)}>0</button></th>
                    <th scope="col">March
                    <button onClick={()=> setMarNumber(marnumber + 1)}>+</button>
                    <button onClick={()=> setMarNumber(marnumber - 1)}>-</button>
                    <button onClick ={()=> setMarNumber(0)}>0</button></th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">number of Apprentcies</th>
                    <td>{jannumber}</td>
                    <td>{febnumber}</td>
                    <td>{marnumber}</td>
                    <td>{jannumber+febnumber+marnumber}</td>
                  </tr>
                  <tr>
                    <th scope="row">Starting Balance</th>
                    <td>{potAmount}</td>
                    <td>{potAmount}</td>
                    <td>{potAmount}</td>
                    <td>{potAmount}</td>
                  </tr>
                  <tr>
                    <th scope="row">Apprentice Cost</th>
                    <td>{jannumber*1200}</td>
                    <td>{jannumber*1200+febnumber*1200}</td>
                    <td>{jannumber*1200+febnumber*1200+marnumber*1200}</td>
                    <td>{jannumber*1200+febnumber*1200+marnumber*1200}</td>
                  </tr>
                  <tr>
                    <th scope="row">Montly Paid In</th>
                    <td>{monthlyAmount}</td>
                    <td>{monthlyAmount}</td>
                    <td>{monthlyAmount}</td>
                    <td>{monthlyAmount}</td>
                  </tr>
                    <tr>
                    <th scope="row">Closing Balance</th>
                    <td>{janClosingBal }</td>
                    <td>{monthlyAmount+50000-(jannumber+febnumber)*1200}</td>
                    <td>{monthlyAmount+50000-(jannumber+febnumber+marnumber)*1200}</td>
                    <td>{monthlyAmount+50000-(jannumber+febnumber+marnumber)*1200}</td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
              </div>
              </>
    )
}

export default LevyCalaculator;