import * as React from 'react';

import useDebounce from "../../hooks/useDebounce";
import { Input } from "./styles";

interface SearchInputProps {
  value: string;
  onChange(e: any): void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const onChangeDebounce = useDebounce(onChange, 600); //aqui passamos pro nosso debounce, a função que vai esperar a executar e o tempo de espera
  const [displayValue, setDisplayValue] = React.useState(value); //com o debouce preciso ter um segundo state que é diferente do usado no debounce

  function handleChange(event: any) {
    setDisplayValue(event.target.value); //setando o valor exibindo no input
    onChangeDebounce(event.target.value.toLowerCase()); //fazendo alterações no valor enviado ao debouce, poderia fazer qualquer alteração mesmo
  }
  return (
    <>
      <Input
        type='search'
        value={displayValue}
        onChange={handleChange}
        name='searchAnime'
      />
      <label htmlFor='searchAnime'></label>
    </>
  );
};

export default SearchInput;
