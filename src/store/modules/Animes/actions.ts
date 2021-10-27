import { actionsTypes, reqTypes, animeData } from "../../../utils/types";

export const ReqAnimes = ({ filter, value, limit }: reqTypes) => {
  return {
    type: actionsTypes.REQ_ANIMES,
    filter,
    value,
    limit,
  };
};

export const ReqAnime = ( value: reqTypes['value'] ) => {
  return {
    type: actionsTypes.REQ_ANIME,
    value
  }
}

export const SetAnimes = (data: animeData) => {
  return {
    type: actionsTypes.SET_ANIMES,
    data,
  };
};

export const SetLoading = (loading: boolean) => {
  return {
    type: actionsTypes.SET_LOADING,
    loading,
  };
};
