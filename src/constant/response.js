const message = (err) =>
  navigator.onLine ? err.response.data.message : err.message;

export default message;
