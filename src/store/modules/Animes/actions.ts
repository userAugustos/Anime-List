import { animesTypes, reqTypes, animeData } from "../../../utils/types";

export const ReqAnimes = ({ filter, value, limit }: reqTypes) => {
  return {
    type: animesTypes.REQ_ANIMES,
    filter,
    value,
    limit,
  };
};

export const SetAnimes = (data: animeData) => {
  return {
    type: animesTypes.SET_ANIMES,
    data,
  };
};
