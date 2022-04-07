import axios from 'axios'

export default (token) => {
  const baseURL = process.env.NODE_ENV === "development" ? "http://localhost:5000" : ""

  if (!token) {
    return axios.create({
      baseURL
    })
  }

  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}