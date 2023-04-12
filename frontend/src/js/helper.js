import 'regenerator-runtime/runtime';
import configs from './configs/index.js';
const { TIMEOUT_SEC } = configs;

const sleep = function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const timeout = function (s) {
  return new Promise(function (_resolve, reject) {
    setTimeout(function () {
      reject(new Error('A requisição levou tempo demais!' +
        `Tempo esgotado após ${s} segundos`));
    }, s * 1000);
  });
};

const AJAX = async function (url, method, params = false) {
  const searchParams = new URLSearchParams();

  if (params) {
    for (const param in params) {
      searchParams.append(param, params[param]);
    }
  }

  const fetchPro = params
    ? fetch(url, {
      method: method,
      body: searchParams
    })
    : fetch(url, { method: method });

  const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

  const responseObj = await res.json();

  if (responseObj.data) {
    const data = responseObj.data;

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } else {
    return responseObj;
  }
};

export default { AJAX, sleep };
