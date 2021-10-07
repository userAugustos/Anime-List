import { all } from "redux-saga/effects";

import mySaga from "./Animes/saga";

export function* rootSagas(): any {
  return yield all([mySaga]);
}
