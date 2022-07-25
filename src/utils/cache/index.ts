import { PORTAL_TOKEN } from './config'

export const getCacheToken = () => {
  return localStorage.getItem(PORTAL_TOKEN)
}
export const setCacheToken = (value) => {
  localStorage.setItem(PORTAL_TOKEN, value)
}
export const removeCacheToken = () => {
  localStorage.removeItem(PORTAL_TOKEN)
}
