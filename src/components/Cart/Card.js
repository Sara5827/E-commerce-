import React, { Component } from '../../../node_modules/react';
import Title from '../Title';
import CartColums from './CartColums';
import EmptyCart from './emeptyCart';
import {ProductConsumer} from '../context';
import CartList from './CartList'
export default class Card extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart}= value;
                        if(cart.length>0){
                         return(
                            <React.Fragment>
                               <Title name="your" title="cart" /> 
                               <CartColums />
                               <CartList value={value}/>
                            </React.Fragment>   
                         );  
                        }
                        else{
                           return <EmptyCart />;
                        }
                        }}
                </ProductConsumer>   
            </section>
        )
    }
}
