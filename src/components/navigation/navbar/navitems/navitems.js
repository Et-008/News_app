import React from 'react';
import { NavLink } from "react-router-dom";
import * as Routes from "../../../../constants/routes/routes";
import Navitem from "./navitem/navitem"
import './navitems.css';

let Navitems = (props) => {
    return (
        <ul className="Navitems">
            <Navitem>
                <NavLink to={'/top-headlines'+ Routes.BUSINESS}>
                    <p>BUSINESS</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={'/top-headlines'+ Routes.ENTERTAINMENT}>
                    <p>ENTERTAINMENT</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={'/top-headlines'+ Routes.HEALTH}>
                    <p>HEALTH</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={'/top-headlines'+ Routes.SPORTS}>
                    <p>SPORTS</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={'/top-headlines'+ Routes.SCIENCE}>
                    <p>SCIENCE</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={'/top-headlines'+ Routes.TECHNOLOGY}>
                    <p>TECHNOLOGY</p>
                </NavLink>
            </Navitem>
        </ul>
    )
}

export default Navitems;
