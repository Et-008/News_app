import React from 'react';
import { NavLink } from "react-router-dom";
import * as Routes from "../../../../constants/routes/routes";
import Navitem from "./navitem/navitem"
import './navitems.css';

let Navitems = (props) => {
    return (
        <ul className="Navitems">
            <Navitem>
                <NavLink to={
                    {
                        pathname: '/top-headlines'+ Routes.BUSINESS,
                        state: {country: props.Country}
                    }
                }>
                    <p>BUSINESS</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={
                    {
                        pathname: '/top-headlines'+ Routes.ENTERTAINMENT,
                        state: {country: props.Country}
                    }
                }>
                    <p>ENTERTAINMENT</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={
                    {
                        pathname: '/top-headlines'+ Routes.HEALTH,
                        state: {country: props.Country}
                    }
                }>
                    <p>HEALTH</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={
                    {
                        pathname: '/top-headlines'+ Routes.SPORTS,
                        state: {country: props.Country}
                    }
                }>
                    <p>SPORTS</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={
                    {
                        pathname: '/top-headlines'+ Routes.SCIENCE,
                        state: {country: props.Country}
                    }
                }>
                    <p>SCIENCE</p>
                </NavLink>
            </Navitem>
            <Navitem>
                <NavLink to={
                    {
                        pathname: '/top-headlines'+ Routes.TECHNOLOGY,
                        state: {country: props.Country}
                    }
                }>
                    <p>TECHNOLOGY</p>
                </NavLink>
            </Navitem>
        </ul>
    )
}

export default Navitems;
