//Então qual a ideia? o debounce aqui vai existir para que não seja feito muitos requests a API a cada letra digitada no input, então, vamos definir que apenas após um tempo depois do primeiro/ultimo caractere digitado, a resquest vai ser enviada
//para isso precisamos de 2 coisas, um delay para executar a função e uma forma de cancelar a execução de função que retorna do setTimout, então vamos fazer ele esperar no timeout

import { useRef } from "react";

export default function useDebounce(fn: any, delay: number) {
  //o useDebounce é um hook que espera executar uma função após uma espera de tempo
  const timeoutRef = useRef(0);

  function deboucendFn(...params: any) {
    //fazendo spread, que permite que eu receba 1 ou 10 argumentos, seja quantos vierem
    window.clearTimeout(timeoutRef.current); //limpando o timout anterior e zerando, quando ficar o tempo do delay sem digitar, ele vai passar tranquilamente, levando em conta o ultimo timout

    timeoutRef.current = window.setTimeout(() => {
      fn(...params); //então aqui, todos os argumentos que recebo, eu passo pra função que vem como parametro do debounce, no caso, um onChange
    }, delay);
  }

  return deboucendFn;
}
