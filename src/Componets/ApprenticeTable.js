import React from "react";
import{useState} from "react";

const ApprenticeTable=()=>{
    const[jannumber,setJanNumber]= useState(0)
    const[febnumber,setFebNumber]= useState(0)
    const[marnumber,setMarNumber]= useState(0)
    const[aprnumber,setAprNumber]= useState(0)
    const[maynumber,setMayNumber]= useState(0)
    const[junnumber,setJunNumber]= useState(0)
    const[julnumber,setJulNumber]= useState(0)
    const[augnumber,setAugNumber]= useState(0)
    const[sepnumber,setSepNumber]= useState(0)
    const[octnumber,setOctNumber]= useState(0)
    const[novnumber,setNovNumber]= useState(0)
    const[decnumber,setDecNumber]= useState(0)
    const[m13number,setM13Number]= useState(0)
    const[m14number,setM14Number]= useState(0)
    const[m15number,setM15Number]= useState(0)
    const[m16number,setM16Number]= useState(0)
    const[m17number,setM17Number]= useState(0)
    const[m18number,setM18Number]= useState(0)

    const[potAmount, setPotAmount]=useState('')
    const[monthlyAmount, setMonthlyAmount]=useState('')
    const janClosingBal = (Number(potAmount)+Number(monthlyAmount))-(jannumber*1200)
    const FebClosingBal = (janClosingBal+Number(monthlyAmount))-((jannumber+febnumber)*1200)
    const marClosingBal = (FebClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber)*1200)
    const aprClosingBal = (marClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber)*1200)
    const mayClosingBal = (aprClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber)*1200)
    const junClosingBal = (mayClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber)*1200)
    const julClosingBal = (junClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber)*1200)
    const augClosingBal = (julClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber)*1200)
    const sepClosingBal = (augClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber)*1200)
    const octClosingBal = (sepClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber)*1200)
    const novClosingBal = (octClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber)*1200)
    const decClosingBal = (novClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200)
    const m13ClosingBal = (decClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200)
    const m14ClosingBal = (m13ClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200)
    const m15ClosingBal = (m14ClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200)
    const m16ClosingBal = (m15ClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber+m14number+m15number+m15number)*1200)
    const m17ClosingBal = (m16ClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber+m15number+m16number+m17number)*1200)
    const m18ClosingBal = (m17ClosingBal+Number(monthlyAmount))-((jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber+m16number+m17number+m18number)*1200)


    return (
        <>
        <div className=" container">
          <div className="pot">
            <div className="montly">
              
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Months</th>
                    <th scope="col">M1
                    <button onClick={()=> setJanNumber(jannumber + 1)}>+</button>
                    <button onClick={()=> setJanNumber(jannumber - 1)}>-</button>
                    <button onClick={()=> setJanNumber(0)}>0</button></th>
                    <th scope="col">M2
                    <button onClick={()=> setFebNumber(febnumber + 1)}>+</button>
                    <button onClick={()=> setFebNumber(febnumber - 1)}>-</button>
                    <button onClick={()=> setFebNumber(0)}>0</button></th>
                    <th scope="col">M3
                    <button onClick={()=> setMarNumber(marnumber + 1)}>+</button>
                    <button onClick={()=> setMarNumber(marnumber - 1)}>-</button>
                    <button onClick={()=> setMarNumber(0)}>0</button></th>
                    <th scope="col">M4
                    <button onClick={()=> setAprNumber(aprnumber + 1)}>+</button>
                    <button onClick={()=> setAprNumber(aprnumber - 1)}>-</button>
                    <button onClick={()=> setAprNumber(0)}>0</button></th>
                    <th scope="col">M5
                    <button onClick={()=> setMayNumber(maynumber + 1)}>+</button>
                    <button onClick={()=> setMayNumber(maynumber - 1)}>-</button>
                    <button onClick={()=> setMayNumber(0)}>0</button></th>
                    <th scope="col">M6
                    <button onClick={()=> setJunNumber(junnumber + 1)}>+</button>
                    <button onClick={()=> setJunNumber(junnumber - 1)}>-</button>
                    <button onClick={()=> setJunNumber(0)}>0</button></th>
                    <th scope="col">M7
                    <button onClick={()=> setJulNumber(julnumber + 1)}>+</button>
                    <button onClick={()=> setJulNumber(julnumber - 1)}>-</button>
                    <button onClick={()=> setJulNumber(0)}>0</button></th>
                    <th scope="col">M8
                    <button onClick={()=> setAugNumber(augnumber + 1)}>+</button>
                    <button onClick={()=> setAugNumber(augnumber - 1)}>-</button>
                    <button onClick={()=> setAugNumber(0)}>0</button></th>
                    <th scope="col">M9
                    <button onClick={()=> setSepNumber(sepnumber + 1)}>+</button>
                    <button onClick={()=> setSepNumber(sepnumber - 1)}>-</button>
                    <button onClick={()=> setSepNumber(0)}>0</button></th>
                    <th scope="col">M10
                    <button onClick={()=> setOctNumber(octnumber + 1)}>+</button>
                    <button onClick={()=> setOctNumber(octnumber - 1)}>-</button>
                    <button onClick={()=> setOctNumber(0)}>0</button></th>
                    <th scope="col">M11
                    <button onClick={()=> setNovNumber(novnumber + 1)}>+</button>
                    <button onClick={()=> setNovNumber(novnumber - 1)}>-</button>
                    <button onClick={()=> setNovNumber(0)}>0</button></th>
                    <th scope="col">M12
                    <button onClick={()=> setDecNumber(decnumber + 1)}>+</button>
                    <button onClick={()=> setDecNumber(decnumber - 1)}>-</button>
                    <button onClick={()=> setDecNumber(0)}>0</button></th>
                    <th scope="col">M13
                    <button onClick={()=> setM13Number(m13number + 1)}>+</button>
                    <button onClick={()=> setM13Number(m13number - 1)}>-</button>
                    <button onClick={()=> setM13Number(0)}>0</button></th>
                    <th scope="col">M14
                    <button onClick={()=> setM14Number(m14number + 1)}>+</button>
                    <button onClick={()=> setM14Number(m14number - 1)}>-</button>
                    <button onClick={()=> setM14Number(0)}>0</button></th>
                    <th scope="col">M15
                    <button onClick={()=> setM15Number(m15number + 1)}>+</button>
                    <button onClick={()=> setM15Number(m15number - 1)}>-</button>
                    <button onClick={()=> setM15Number(0)}>0</button></th>
                    <th scope="col">M16
                    <button onClick={()=> setM16Number(m16number + 1)}>+</button>
                    <button onClick={()=> setM16Number(m16number - 1)}>-</button>
                    <button onClick={()=> setM16Number(0)}>0</button></th>
                    <th scope="col">M17
                    <button onClick={()=> setM17Number(m17number + 1)}>+</button>
                    <button onClick={()=> setM17Number(m17number - 1)}>-</button>
                    <button onClick={()=> setM17Number(0)}>0</button></th>
                    <th scope="col">M18
                    <button onClick={()=> setM18Number(m18number + 1)}>+</button>
                    <button onClick={()=> setM18Number(m18number - 1)}>-</button>
                    <button onClick={()=> setM18Number(0)}>0</button></th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Number of Apprentcies</th>
                    <td>{jannumber}</td>
                    <td>{febnumber}</td>
                    <td>{marnumber}</td>
                    <td>{aprnumber}</td>
                    <td>{maynumber}</td>
                    <td>{junnumber}</td>
                    <td>{julnumber}</td>
                    <td>{augnumber}</td>
                    <td>{sepnumber}</td>
                    <td>{octnumber}</td>
                    <td>{novnumber}</td>
                    <td>{decnumber}</td>
                    <td>{m13number}</td>
                    <td>{m14number}</td>
                    <td>{m15number}</td>
                    <td>{m16number}</td>
                    <td>{m17number}</td>
                    <td>{m18number}</td>
                    <td>{junnumber+febnumber+marnumber+aprnumber+marnumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber+m13number+m14number+m15number+m16number+m17number+m18number}</td>
                  </tr>
                  <tr>
                    <th scope="row">Starting Balance</th>
                    <td>{Number(potAmount)}</td>
                    <td>{janClosingBal }</td>
                    <td>{FebClosingBal}</td>
                    <td>{marClosingBal}</td>
                    <td>{aprClosingBal}</td>
                    <td>{mayClosingBal }</td>
                    <td>{junClosingBal}</td>
                    <td>{julClosingBal}</td>
                    <td>{augClosingBal}</td>
                    <td>{sepClosingBal }</td>
                    <td>{octClosingBal}</td>
                    <td>{novClosingBal}</td>
                    <td>{decClosingBal}</td>
                    <td>{m13ClosingBal }</td>
                    <td>{m14ClosingBal}</td>
                    <td>{m15ClosingBal}</td>
                    <td>{m16ClosingBal}</td>
                    <td>{m17ClosingBal }</td>
                    <td>{m18ClosingBal}</td>
                  </tr>
                  <tr>
                    <th scope="row">Apprentice Cost</th>
                    <td>{jannumber*1200}</td>
                    <td>{(jannumber+febnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200+(jannumber*3600)}</td>                   
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200+(febnumber*3600)}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200+(marnumber*3600)}</td>
                    <td>{(jannumber+febnumber+marnumber+aprnumber+maynumber+junnumber+julnumber+augnumber+sepnumber+octnumber+novnumber+decnumber)*1200+(marnumber*3600)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Montly Paid In</th>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                    <td>{Number(monthlyAmount)}</td>
                  </tr>
                    <tr>
                    <th scope="row">Closing Balance</th>
                    <td>{janClosingBal }</td>
                    <td>{FebClosingBal}</td>
                    <td>{marClosingBal}</td>
                    <td>{aprClosingBal}</td>
                    <td>{mayClosingBal}</td>
                    <td>{junClosingBal}</td>
                    <td>{julClosingBal}</td>
                    <td>{augClosingBal}</td>
                    <td>{sepClosingBal }</td>
                    <td>{octClosingBal}</td>
                    <td>{novClosingBal}</td>
                    <td>{decClosingBal}</td>
                    <td>{m13ClosingBal}</td>
                    <td>{m14ClosingBal}</td>
                    <td>{m15ClosingBal}</td>
                    <td>{m16ClosingBal}</td>
                    <td>{m17ClosingBal}</td>
                    <td>{m18ClosingBal}</td>
                    <td>{m18ClosingBal}</td>
                  </tr>
                </tbody>
              </table>
              </div>
              </div>
              </div>
              </>
    )
}

export default ApprenticeTable;