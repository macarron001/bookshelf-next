import axios from "axios"
const base_url = process.env.NEXT_PUBLIC_BASE_URL
const base_header = `Content-Type': 'application/json;charset=utf-8`

export const base = axios.create({
  baseURL: base_url,
  headers: { base_header },
})

const authHeaders = () => {
  const token = localStorage.getItem("userToken")
  if (token) {
    return {
      base_header,
      Authorization: JSON.parse(token),
    }
  }
}

export const baseWithAuth = () => {
  return axios.create({
    baseURL: base_url,
    headers: authHeaders(),
  })
}
