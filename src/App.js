import React,{useState} from 'react';
import './Pratik.css';

function App() {

const[myCar,ChangeMyCar] = useState("BMW");

const ChangeInputValue = (event) =>
{
  ChangeMyCar(event.target.value);
}


  return (
    <div className="main_body">
      <h1> {myCar} </h1> 
      
    <input type="text"
           
      onChange={ChangeInputValue}
           
    />

    <input type="number"
          
      onChange={ChangeInputValue}
           
    />
    
    <input type="email"
           
      onChange={ChangeInputValue}
           
    />
    
    <input type="password"
           
      onChange={ChangeInputValue}
           
    />
    
    <input type="date"
    min="2020-02-02"
    max="2020-03-03"
    onChange={ChangeInputValue}
           
    />
    
    <input type="time"
           
      onChange={ChangeInputValue}
           
    />

    <input type="checkbox"
       value="PG"     
      onChange={ChangeInputValue}
                
    />PG
    <input type="checkbox"
       value="UG"     
      onChange={ChangeInputValue}
                
    />UG

<input type="radio"
       value="Male"     
      onChange={ChangeInputValue}
      Name="myGender"          
    />Male
    <input type="radio"
       value="Female"     
      onChange={ChangeInputValue}
       Name="myGender"         
    />Female
    
    <h2>select your city</h2>
    <select>
      <option>Pune</option>
      <option>Mumbai</option>
      <option>Nashik</option>
    </select>
    
    






    </div>
  );
}

export default App;
