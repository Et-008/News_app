import React, { useState } from 'react';
import Navitems from './navitems/navitems';
import { Link } from "react-router-dom";
import * as Routes from "../../../constants/routes/routes";
import CountriesOption from './country_selector/country_selector';
// import Language from '../../../constants/countries/selected_language';
import './navbar.css';

let Navigation = (props) => {
    let [country, setCountry] = useState('in');
    let CountryChangedHandler = (event) => {
        setCountry(event.target.value)
    }
    return (
        <nav className="Navbar">
            <h1 className="Nav-title">
                    <Link to={
                        {
                            pathname: Routes.HOME,
                            state: {country: country}
                        }
                        }>
                        News App
                    </Link>
            </h1>
            <Navitems Country={country} />
            <CountriesOption CountryChangedHandler={(event) => CountryChangedHandler(event)}/>
            {/* <Language /> */}
        </nav>
    )
}

export default Navigation;
