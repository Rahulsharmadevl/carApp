
import React, {useState} from 'react';
import Display from './display';


export default function CarComponents() {

    const [cardetails, setCardetails] =useState([]);

    const [car, setCar] =useState({});

    const cardata = (e) =>{
        e.preventDefault() // page refresh ko rokne ke liye use hota hai 
    let newdata;
    if(cardetails.length && cardetails.find(duplicate=>duplicate.name===car.name)){
        newdata=cardetails.map(duplicate=>duplicate.name===car.name? {...duplicate,quantity:duplicate.quantity+car.quantity}: duplicate);
        setCardetails(newdata);
    }
    else{
        setCardetails([...cardetails,car]);
    }   
    }
    console.log("car",car);
    console.log("cardetials",cardetails);
    
    
    // syntax of jsx 
    // {(e)=>function_name(e)}
  return (
    <div>
        <form onSubmit= {(e)=>cardata(e)}> 
            <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>   
                <input type="text" className="form-control" name ="name" onChange={(e)=>setCar({...car,[e.target.name]:e.target.value})}/>
                <div id="text" className="form-text"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="Model" className="form-label">Model</label>
                <input type="text" className="form-control" name ="model" onChange={(e)=>setCar({...car,[e.target.name]:e.target.value})}/>
            </div>
            <div className="mb-3">
                <label className="form-check-label" > Quantity</label>
                <input type="number" className="Quantity" name ="quantity" onChange={(e)=>setCar({...car,[e.target.name]:+e.target.value})}/>
              
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    <Display cardetails={cardetails}/>
    </div>
  )
}