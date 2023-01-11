import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const { name, population, area, region, flags } = props.country;
    return (
        <div className='country'>
            <h1>Country Name : {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p><small>Area : {area}</small></p>
            <p><small>Region : {region}</small></p>
        </div>
    );
};

export default Country;