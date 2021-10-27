import * as React from 'react';
import { useSelector } from 'react-redux';
import loadingLogo from "../../assets/img/loading.gif";
import { initialStateProps } from '../../utils/types';
import { Loading } from '../Home/styles';
import { Container } from "./styles";

export default function Details() {

  const anime = useSelector((state: any) => state.Animes.data);
  const loading = useSelector((state: initialStateProps) => state.Animes.loading);

  React.useEffect(() => {
    console.log(anime)
  }, [anime]);

  return(
    <Container>
      { loading ? <Loading src={loadingLogo} alt='loading...' /> : <p>{anime.attributes.canonicalTitle}</p> }
    </Container>
  );
}