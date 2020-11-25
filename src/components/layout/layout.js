import React from 'react';
import Navbar from '../navigation/navbar/navbar';
import Aux from '../../hoc/Aux';

let Layout = (props) => {
    return  (
        <Aux>
            <Navbar Country={props.Country} CountryChangedHandler={(event) => props.CountryChangedHandler(event)} />
            {props.children}
        </Aux>
    )
};

export default Layout;
