import { animesTypes, action, initialStateProps } from "../../../utils/types";

const initialState = {
  Animes: {
    data: [],
    loading: true,
  },
};

export default function Animes(
  state: initialStateProps = initialState,
  action: action
) {
  switch (action.type) {
    case animesTypes.SET_ANIMES:
      return {
        data: action.data,
      };
    case animesTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
