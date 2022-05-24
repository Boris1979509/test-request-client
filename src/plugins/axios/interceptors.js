export default function (axios) {
  axios.interceptors.request.use(
    (request) => request,
    (error) => Promise.reject(error)
  );
  axios.interceptors.response.use(
    (response) => response.data,
    async (error) => Promise.reject(error.response.data)
  );
}
