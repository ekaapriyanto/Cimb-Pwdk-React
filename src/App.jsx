import React from 'react';
import logo from './logo.svg';
import LogoBrand from './views/image/LogoBrand.png'
import brave from './views/image/brave.png';
import crazyRich from './views/image/crazyRich.png';
import educated from './views/image/educated.png';
import handmaid from './views/image/handmaid.png';
import './App.css';
import './bootstrap.css';
import ProductCard from './views/comp/ProdactCard';
import CounterScreen from './views/screen/CounterScreen';
import InputScreen from './views/screen/inputScreen';
function App() {

  let arrProduct = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: crazyRich,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: educated,
      stock: 3,
    },
  ]

  const renderProduct = () => {
    return arrProduct.map((val) => {
      return <ProductCard productData={val} />
    })
  }
  return (
    <div className="App">
      <img src={LogoBrand} width='200px' height='80px'/>
      <InputScreen />
      {/* <CounterScreen /> */}
      {/* <div className="container">
      <div className="row p-1">
        {renderProduct()}
      </div>
      </div> */}
    </div>
  )}
  export default App;
