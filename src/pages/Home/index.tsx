import * as React from "react";
import { useEffect } from "react";
// import { InputHTMLAttributes } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchInput from "../../components/searchInput";
import loadingLogo from "../../assets/img/loading.gif";
import { ReqAnime, ReqAnimes } from "../../store/modules/Animes/actions";
import { animeData, initialStateProps } from "../../utils/types";
import { useHistory } from "react-router";

import { Container, AnimesSection, SearchHeader, Loading } from "./styles";
import { Card } from "../../components/Card";

export default function Home() {
  const history = useHistory();

  const dispatch = useDispatch();
  const anime = useSelector((state: initialStateProps) => state.Animes.data);
  const loading = useSelector(
    (state: initialStateProps) => state.Animes.loading
  );

  const handleSearchAnime = (value: any) => {
    //aqui eu passo diretamente o value, por que no componente do SeacrInput eu já to formatando o event, então láeu já passo pro debounce o e.target.value, e o debouce me devolve só o value
    if (value === "") {
      //garantindo que se o usuário apenas limpar o input, não vou mandar uma request sem value
      return;
    }
    dispatch(ReqAnimes({ filter: "text", value, limit: 10 }));
  };

  const handleDetailAnime = (event: React.MouseEvent) => {
    dispatch(ReqAnime(event.currentTarget.id));

    history.push(`/${event.currentTarget.id}`);
  };

  useEffect(() => {
    dispatch(ReqAnimes({ filter: "averageRating", value: "80", limit: 10 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <SearchHeader>
        <h3>Animes</h3>
        <SearchInput value='' onChange={(e: any) => handleSearchAnime(e)} />
      </SearchHeader>
      <AnimesSection>
        {loading ? (
          <Loading src={loadingLogo} alt='loading...' />
        ) : (
          <ul>
            { Array.isArray(anime) &&
            anime?.map((item: animeData) => (
                <li key={item.id}>
                  <Card
                    image={item.attributes.posterImage?.small}
                    title={item.attributes.canonicalTitle}
                    id={item.id}
                    onClick={handleDetailAnime} />
                </li>
              ))}
          </ul>
        )}
      </AnimesSection>
    </Container>
  );
}
