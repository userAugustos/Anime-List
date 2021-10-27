import { actionsTypes, action, initialStateProps } from "../../../utils/types";

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
    case actionsTypes.SET_ANIMES:
      return {
        data: action.data,
      };
    case actionsTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
}
