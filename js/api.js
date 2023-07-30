const BASE_URL = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_MESSAGE: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_MESSAGE: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const load = async (route, errorText, method = Method.GET, body = null) => {
  try {
    const response = await fetch(`${BASE_URL}${route}`, {method, body});
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch {
    throw new Error(errorText);
  }
};

const getData = () => load(Route.GET_DATA, ErrorText.GET_MESSAGE);

const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_MESSAGE, Method.POST, body);

export {getData, sendData};
