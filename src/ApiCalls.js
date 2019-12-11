export const fetchWines = () => {
  return fetch('https://the-vino-cellar.herokuapp.com/api/v1/vinos')
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}

export const postWine = (wine) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(wine),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('https://the-vino-cellar.herokuapp.com/api/v1/vinos', options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}

export const deleteWine = (wine) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`https://the-vino-cellar.herokuapp.com/api/v1/vinos/${wine}`, options)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error.message)
}