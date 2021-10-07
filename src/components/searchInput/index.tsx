import React, { useState } from "react";

import useDebounce from "../../hooks/useDebounce";
import { Input } from "./styles";

interface SearchInputProps {
  value: string;
  onChange(): any;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const onChangeDebounce = useDebounce(onChange, 600);
  const [dysplayValue, setdysplayValue] = useState(value);

  function handleChange(event: any) {
    setdysplayValue(event.target.value);
    onChangeDebounce(event.target.value.toLowerCase());
  }
  return (
    <>
      <Input
        type='search'
        value={dysplayValue}
        onChange={handleChange}
        name='searchAnime'
      />
      <label htmlFor='searchAnime'></label>
    </>
  );
};

export default SearchInput;
