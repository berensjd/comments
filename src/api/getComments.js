import http from "../feeds/httpService";
export default apiEndpoint => {
  return http.get(apiEndpoint);
};
