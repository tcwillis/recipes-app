import axios from "axios";
import Config from "../../app/config";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { API } from "../actionTypes";
import { apiError, apiStart, apiEnd } from "../actions/apiActions";

export const history = createBrowserHistory();

const apiMiddleware = ({ dispatch }) => next => async action => {
  next(action);

  if (action.type !== API) return;

  const { url, method, data, onSuccess, label, headers } = action.payload;
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios default configs
  axios.defaults.baseURL = Config.baseApiUrl;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  if (label) {
    dispatch(apiStart(label));
  }

  await axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch(error => {
      dispatch(apiError(error));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default [thunk, routerMiddleware(history), apiMiddleware];
