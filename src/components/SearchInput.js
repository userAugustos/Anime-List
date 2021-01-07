import React, { useState } from 'react';

import useDebounce from '../hooks/useDebounce';

const SearchInput = ({value, onChange}) => {

    const onChangeDebounce = useDebounce(onChange, 600);
    const [dysplayValue, setdysplayValue] = useState(value);

    function handleChange(event) {
        setdysplayValue(event.target.value);
        onChangeDebounce(event.target.value.toLowerCase());
    }
    return (
        <input type="search" value={dysplayValue} onChange={handleChange} name="searchAnime" placeholder="busque animes" />
    )
}

export default SearchInput;