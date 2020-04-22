import React from 'react';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import Cookie from "universal-cookie"

import logo from './logo.svg';
import LogoBrand from './views/image/LogoBrand.png';
import home from './views/image/home.png'
import brave from './views/image/brave.png';
import crazyRich from './views/image/crazyRich.png';
import educated from './views/image/educated.png';
import handmaid from './views/image/handmaid.png';
import './App.css';
import './bootstrap.css';
import ProductCard from './views/comp/ProdactCard';
import CounterScreen from './views/screen/CounterScreen';
import register from './views/screen/register';
import LifecycleScreen from './views/screen/LifecycleScreen';
import HomeScreen from './views/screen/HomeScreen';
import PageNotFound from './views/screen/PageNotFound';
import Navbar from './views/comp/Navbar';
import ProfileScreen from './views/screen/ProfileScreen';
import Register from './views/screen/register';
import InputScreen from './views/screen/InputScreen';
import WeekNavbar from './views/Weekend/WeekNavbar';
import WeekHome from './views/Weekend/WeekHome';
import WeekLogin from './views/Weekend/WeekLogin';
import WeekRegister from './views/Weekend/WeekRegister';
import WeekProfil from './views/Weekend/WeekProfile';
import TodoRedux from './views/screen/TodoRedux';
import { render } from '@testing-library/react';

const cookieObject = new Cookie();

class App extends React.Component {
  

  arrProduct = [
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

  renderProduct = () => {
    return this.arrProduct.map((val) => {
      return <ProductCard productData={val} />
    })
  }
  render(){
    return (
      // <div className="App">
      //   <img src={LogoBrand} width='200px' height='80px'/>
      //   {/* <LifecycleScreen /> */}
      //   {/* <InputScreen /> */}
      //   {/* <CounterScreen /> */}
      //   {/* <div className="container">
      //   <div className="row p-1">
      //     {renderProduct()}
      //   </div>
      //   </div> */}
      // </div>
  
      <>
      <WeekNavbar />
        <Switch>
          {/* <Route exact path="/" component={HomeScreen} />
          <Route exact path="/lcs" component={LifecycleScreen} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cs" component={CounterScreen} />
          <Route exact path="/inputsc" component={InputScreen} />
          <Route exact path="/profile/:username" component={ProfileScreen} />
          <Route path="*" component={PageNotFound}/> */}
          <Route exact path="/" component={WeekHome} />
          <Route exact path="/login" component={WeekLogin} />
          <Route exact path="/register" component={WeekRegister} />
          <Route exact path="/profile/:username" component={WeekProfil} />
          <Route exact path="/todoredux" component={TodoRedux} />
          <Route path="*" component={PageNotFound}/>
        </Switch>
        </>
    )
  }
}
  export default withRouter(App);
