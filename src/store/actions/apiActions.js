import { API, API_START, API_END, API_ERROR } from "../actionTypes";

export const apiStart = label => ({
  type: API_START,
  payload: label
});

export const apiEnd = label => ({
  type: API_END,
  payload: label
});

export const apiError = error => ({
  type: API_ERROR,
  error
});

export const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  label = "",
  headersOverride = null
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      label,
      headersOverride
    }
  };
};
