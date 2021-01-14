import React from 'react';
import {  useState } from 'react';

const Search = ({ filterData }) => {
    const [ filterinput, setFilterinput ] = useState('');
    const filterDataHandler = event => { 
        setFilterinput(event.target.value);
        filterData(event.target.value);
    }
    return <input type="search" placeholder="&#xF002; Search" value={ filterinput } onChange = { filterDataHandler } />
};
export default Search