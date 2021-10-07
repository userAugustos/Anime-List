import { call, all, put, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";

import { reqTypes } from "../../../utils/types";
import { SetAnimes } from "./actions";

function* ReqAnimes({ filter, value, limit }: reqTypes): any {
  try {
    const result = yield call(
      api.get,
      `/anime?filter[${filter}]=${value}&page[limit]=${limit}`
    );
    yield put(SetAnimes(result.data.data));
  } catch (error) {
    console.log(error);
  }
}

export default all([takeLatest("REQ_ANIMES", ReqAnimes)]);
