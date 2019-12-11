export const fetchWines = () => {
  return fetch('https://the-vino-cellar.herokuapp.com/api/v1/vino')
    .then(res => res.json())
    .then(res => res)
    .catch(error => error.message)
}