import React, { useState } from 'react';
import Navitems from './navitems/navitems';
import { Link } from "react-router-dom";
import * as Routes from "../../../constants/routes/routes";
import CountriesOption from './country_selector/country_selector';
// import Language from '../../../constants/countries/selected_language';
import './navbar.css';

let Navigation = (props) => {
    return (
        <nav className="Navbar">
            <h1 className="Nav-title">
                    <Link to={Routes.HOME}>
                        News App
                    </Link>
            </h1>
            <Navitems/>
            <CountriesOption CountryChangedHandler={(event) => props.CountryChangedHandler(event)}/>
            {/* <Language /> */}
        </nav>
    )
}

export default Navigation;
