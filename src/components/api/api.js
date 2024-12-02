const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-27/',
  headers: {
    'authorization': '9b505028-7a36-4a13-bcda-c759c72913bb',
    'Content-Type': 'application/json',
  },
};

function checkResponse(res) {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const getUserInfo = () => {
  return fetch(`${apiConfig.baseUrl}users/me`, {
    method: "GET",
    headers: apiConfig.headers
  }).then(res => {
    return checkResponse(res)
  })
}

export const getInitialCards = () => {
  return fetch(`${apiConfig.baseUrl}cards`, {
    method: "GET",
    headers: apiConfig.headers
  }).then(res => {
    return checkResponse(res)
  });
}

export const updateUserInfo = (name, about) => {
  return fetch(`${apiConfig.baseUrl}users/me`, {
    method: "PATCH",
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  }).then(res => {
    return checkResponse(res)
  });
}

export const createNewCardApi = (newCard) => {
  return fetch(`${apiConfig.baseUrl}cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: newCard.name,
      link: newCard.link
    })
  })
    .then(res => checkResponse(res))
}

export const addLikeCardApi = (cardId) => {
  return fetch(`${apiConfig.baseUrl}cards/likes/${cardId}`, {
    method: 'PUT',
    headers: apiConfig.headers,
  })
    .then(res => checkResponse(res))
}

export const deleteLikeCardApi = (cardId) => {
  return fetch(`${apiConfig.baseUrl}cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
    .then(res => checkResponse(res))
}

export const deleteCardApi = (cardId) => {
  return fetch(`${apiConfig.baseUrl}cards/${cardId}`, {
    method: 'DELETE',
    headers: apiConfig.headers,
  })
    .then(res => checkResponse(res))
}

export const changeAvatarApi = (popupInputTypeUrl) => {
  return fetch(`${apiConfig.baseUrl}users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: popupInputTypeUrl.value,
    })
  })
    .then(res => checkResponse(res))
}

