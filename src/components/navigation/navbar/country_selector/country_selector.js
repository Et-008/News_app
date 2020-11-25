import React from 'react';
import Countries from '../../../../constants/countries/country_list';

let Country_Selector = (props) => {
    let OptionalCountries = Countries.map(country => {
        return (<option key={country.id} value={country.id} >{country.name}</option>)
    })

    return (
        <select id="Country" onChange={(event) => {return props.CountryChangedHandler(event)}} >
            {OptionalCountries}
        </select>
    )
}

export default Country_Selector;