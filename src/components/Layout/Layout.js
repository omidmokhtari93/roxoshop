import React from 'react';
import Wrapper from '../../hoc/Wrapper'
import classes from './layout.module.css';
import Navbar from '../Navigation/Navbar';

const Layout = (props) => (
    <Wrapper>
        <Navbar />
        <main className="container">
            {props.children}
        </main>
    </Wrapper>
);



export default Layout;