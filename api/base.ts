import axios from "axios"
const base_url = process.env.NEXT_PUBLIC_BASE_URL

export const base = axios.create({
  baseURL: base_url,
  headers: { "Content-Type": "application/json" },
})

export const baseWithAuth = () => {
  const token = localStorage.getItem("userToken")
  if (token) {
    base.defaults.headers.common["authorization"] = JSON.parse(token)
  }
  return base
}
