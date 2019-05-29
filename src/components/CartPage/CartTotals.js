import React from 'react'
import {ProductConsumer} from '../../context';

export default function CartTotals() {
    return <div className="container">
      <div className="row">
     <ProductConsumer>
       {value => {
           const {clearCart, cartSubTotal, cartTax, cartTotal} = value;
           return <div className="col text-title text-center my-4">
               <button className="btn btn-outline-danger text-capitalize"
               onClick={clearCart} >clearCart</button>
               <h3>Subtotal : £{cartSubTotal}</h3>
               <h3>Tax :  £{cartTax} </h3>
               <h3> SubTotal: £{cartTotal}</h3>
           </div>
       }}
     </ProductConsumer>
      </div>
    </div>
}
