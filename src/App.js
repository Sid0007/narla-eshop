import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ProductsPage';
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage';
import Default from './pages/Default.js';
import Cart from './pages/CartPage.js';

import {Route, Switch} from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

import { FaHome } from "react-icons/fa";
import styled from "styled-components";

class App extends Component {
  render() {
    return <>
    {/* navbar, sidebar, cart, footer */}
    <Navbar />
    <Sidebar />
    <SideCart />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/contact"  component={Contact} />
      <Route path="/Products" exact component={Products} />
      <Route path="/products/:id" exact component={SingleProduct} />
      <Route path="/cart" component = {Cart} />
      <Route component={Default} />
    </Switch>
    <Footer />
    </>;
  }
}


const color = '#f15025';
const Button = styled.button`
color:white;
background:${color};
font-size: ${props => (props.large ? "3rem" : "1rem")}
`;

export default App;
