import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './views/screen/NewScreen';
import TableProduct from './views/comp/TableProduct';

function App() {
  let arr = ["Bandung", "Jakarta", "Tangerang"];

  const renderArr = () =>{
     return arr.map(val => {
      return (
        <>
          <p>{val}</p>
          <NewScreen />
        </>
      )
    })
  }
  return (
    <div className="App">
      <h1>Halo Dunia</h1>
      <h2 style={{ border: "1px solid red", color: "pink", marginTop: "30px" }}>Test Styling</h2>
      {/* {renderArr()} */}
      <TableProduct/>
    </div>
  )}
  export default App;
