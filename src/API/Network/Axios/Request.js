import axios from "axios";

const host = "http://localhost:5000";

function getRootUrl(reduxState) {
  let rootURL = host;
  if (reduxState !== null) {
    rootURL = "http://localhost:5000";
  }
  return rootURL;
}

const request = (url, reduxState, options) => {
  return async () => {
    const config = {
      url: getRootUrl(reduxState) + url,
      ...options,
      withCredentials: true,
      headers: {
        Accept: "application/vnd.handson.rfid.v5+json",
      },
    };

    let response;

    try {
      response = axios(config);
    } catch (error) {
      console.error(error);
    }
    return response;
  };
};

export { request };
