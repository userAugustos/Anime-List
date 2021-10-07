import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../../components/searchInput";
import loadingLogo from "../../assets/img/loading.gif";
import { ReqAnimes } from "../../store/modules/Animes/actions";
import { animeData } from "../../utils/types";

import { Container, AnimesSection, SearchHeader, Loading } from "./styles";

// const ReqAnimeParams = { filter: 'averageRating', value: '80', limit: 10 }

export default function Home() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const anime = useSelector((state: any) => state.Animes.data);

  const handleSearchAnime = (e: any) => {};

  useEffect(() => {
    dispatch(ReqAnimes({ filter: "averageRating", value: "80", limit: 10 }));
  }, []);

  return (
    <Container>
      <SearchHeader>
        <h3>Animes</h3>
        <SearchInput value={text} onChange={() => handleSearchAnime} />
      </SearchHeader>
      <AnimesSection>
        {text || anime === "" ? (
          <Loading src={loadingLogo} alt='loading...' className='loading' />
        ) : (
          <ul>
            {anime &&
              anime.map((item: animeData) => (
                <li key={item.id}>
                  <img
                    src={item.attributes.posterImage?.small}
                    alt={item.attributes.canonicalTitle}
                  />
                  <p> {item.attributes.canonicalTitle} </p>
                </li>
              ))}
          </ul>
        )}
      </AnimesSection>
    </Container>
  );
}
