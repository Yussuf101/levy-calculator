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

    const[potAmount, setPotAmount]=useState('')
    const[monthlyAmount, setMonthlyAmount]=useState('')
    const janClosingBal = (Number(potAmount)+Number(monthlyAmount))-(jannumber*1200)
    const FebClsingBal = (janClosingBal+Number(monthlyAmount))-(jannumber*1200+febnumber*1200)
    const marClosingBal = (FebClsingBal+Number(monthlyAmount))-(jannumber*1200+febnumber*1200+marnumber*1200)


    return (
        <>
        <div className=" container">
          <div className="pot">
            <p> How much is currently in your Pot?    <input id="potAmount" placeholder="Enter Amount" onChange={(e)=> setPotAmount(e.target.value)}/></p>
            <div className="montly">
              <p> How much is Monthly pay in?   <input  id="MonthlyAmount" placeholder="Enter Amount" onChange={(e)=> setMonthlyAmount(e.target.value)}/></p>
              
              <br></br>
              <br></br>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Months</th>
                    <th scope="col">Month1
                    <button onClick={()=> setJanNumber(jannumber + 1)}>+</button>
                    <button onClick={()=> setJanNumber(jannumber - 1)}>-</button>
                    <button onClick ={()=> setJanNumber(0)}>0</button></th>
                    <th scope="col">Month2
                    <button onClick={()=> setFebNumber(febnumber + 1)}>+</button>
                    <button onClick={()=> setFebNumber(febnumber - 1)}>-</button>
                    <button onClick ={()=> setFebNumber(0)}>0</button></th>
                    <th scope="col">Month3
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
                    <td>{Number(potAmount)}</td>
                    <td>{janClosingBal }</td>
                    <td>{FebClsingBal}</td>
                    <td>{marClosingBal}</td>
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
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                  </tr>
                    <tr>
                    <th scope="row">Closing Balance</th>
                    <td>{janClosingBal }</td>
                    <td>{FebClsingBal}</td>
                    <td>{marClosingBal}</td>
                    <td>{marClosingBal}</td>
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