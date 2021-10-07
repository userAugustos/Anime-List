import { animesTypes } from "../../../utils/types";

// const initialState = {
//   data: [],
//   anime: {}
// }

export default function Animes(state = [], action: any) {
  switch (action.type) {
    case animesTypes.SET_ANIMES:
      return {
        data: action.data,
      };
    default:
      return state;
  }
}
