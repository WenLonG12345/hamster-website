import axios from "axios";

async function request(url: string, options: any = {}) {
  const {...newOptions} = options || {};

  return axios({url, ...newOptions})
  .then((r) => {
    if(r.status) {
      return r;
    }

    return {
      ...r, status: 204
    }
  })
  .catch((e) => {
    if(!e.response) {
      return {status: 99999, data: undefined};
    }

    const {status, data} = e.response;

    return {status, data};
  })
  .finally();
}

export default request;