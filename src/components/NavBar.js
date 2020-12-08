import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class NavBar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
               <i className="fa fa-mobile-alt"></i> 
                    <a href='/'>
                    <img src={logo} alt="store" className="nbvbar-brand" /> 
                    </a>
               <ul className="navbar-nav align-items-center" >  
               <li className="nav-item ml-5">
                    <a href="/" className='nav-link'>
                        products
                    </a>
               </li>   
               </ul>
                    <a href="/Card" className="ml-auto">  
                    <ButtonContainer>
                       <span className="mr-2">
                           <i className="fa fa-cart-plus"/>
                        </span>
                     
                         my cart
                    </ButtonContainer>
                    </a>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:nav(--mainWhite)!important;
    font-size:1.3rem;
    text-transform: capitalize;
}
`

