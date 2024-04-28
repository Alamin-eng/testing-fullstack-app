
import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [name, setName] = useState(null);

  useEffect(()=>{
    let fetchData = async ()=>{
      try{
        const response = await axios.get("http://localhost:3001/")
        console.log(response.data)
        setName(response.data)

      } catch(error){

      }
    }
    fetchData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello <span style={{color:"red"}}>{name}</span>
        </h1>
      </header>
    </div>
  );
}

export default App;
