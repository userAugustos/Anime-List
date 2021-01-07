import React, { useEffect, useState } from 'react';

import  SearchInput  from "./components/SearchInput";
import loadingLogo from './img/loading.gif';

const api = 'https://kitsu.io/api/edge';

function App() {
  const [text, setText] = useState('');
  const [anime, setAnime] = useState({});

  useEffect(() => {
    if(text){
      fetch(`${api}/anime?filter[text]=${text}&page[limit]=10`).then((response) => response.json())
        .then((response) => {
          setAnime(response);
          // console.log(response.data[0].attributes.canonicalTitle);
        });
    }  
    
  }, [text]);

  return (
    <>
    <div>
      <h3>Animes</h3>
      <SearchInput value={text} onChange={ (search) => setText(search)}/>
    </div>
    <section>
      {text && !anime.data && (
        <img src={loadingLogo} alt="loading..." className="loading-logo"/>
      )}
      {anime.data && (
        <ul>
          {anime.data.map((item) => (
            <li key={item.id}>
              <img src={item.attributes.posterImage.small} alt={item.attributes.canonicalTitle} />
              <p> {item.attributes.canonicalTitle} </p>
            </li>
          ))}
        </ul>
      )}
    </section>
    </>
  );
}

export default App;
