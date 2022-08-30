import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import { Quotes } from './Quotes';
import { Random } from './Random';
type Qoute={
  id:number,
  text:string,
  author:string
}
type Quotes={
  quotes:Qoute[]
}
function App() {
   let [quotes,setQuotes]=useState([]);
   console.log(quotes)

   useEffect(()=>{
    fetch("http://localhost:3001/")
      .then((resp) => resp.json())
      .then((resp) => setQuotes(resp));
   },[])
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to="/quotes" />} />
        <Route path="quotes" element={<Quotes quotes={quotes} />} />
        <Route path='random' element={<Random/>}></Route>
      </Routes>
    </div>
  );
}

export default App
