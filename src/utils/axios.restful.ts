import axios from 'axios'
import { stringify } from 'query-string'
import { message } from 'antd'

import envData from '@/constants/env'
import { getCacheToken } from '@/utils/cache'

const errorMessageMap = {
  400: '请求参数错误',
  401: '需要登录',
  403: '用户没有权限',
  404: '请求地址有误',
  500: '服务器错误',
  502: '网关错误',
  600: '项目已归档，无法修改信息',
}

function dispatchErrorMessage(desc: string) {
  message.error(`请求错误: ${desc}`)
}

function beforeRequestInterceptor(request: Record<string, any>) {
  const token = getCacheToken()

  if (token) request.headers.Authorization = `Bearer ${token}`

  return request
}

function beforeRequestInterceptorR(request: Record<string, any>) {
  return request
}

function errorRequestInterceptor(error: Record<string, any>) {
  throw error
}

function successResponseInterceptor(response: Record<string, any>) {
  const {
    data: { data, success, message = null, msg = null, code = null },
    config: { responseType },
  } = response

  if (['blob'].includes(responseType)) {
    return response
  } else if (!success) {
    throw {
      message: message || msg,
      code,
    }
  }

  return data
}

function errorResponseInterceptor(err: Record<string, any>) {
  const error = {
    code: err.code,
    message: err.message || err.msg,
    status: err.response?.status,
    statusText: err.response?.statusText,
    response: err.response,
  }

  if (error.code === 'ECONNABORTED') {
    dispatchErrorMessage('请求超时')
  }
  if (error.response) {
    if (error.status === 401) {
      // 401处理
    }
    if (error.status === 403) {
      // 403处理
    }
    dispatchErrorMessage(errorMessageMap[error.status])

    if (Object.keys(errorMessageMap).includes(String(error.status))) return { errorResponse: error }
  } else {
    dispatchErrorMessage(error.message)
  }

  throw error
}

function ApiInstanceFactory(baseURL: string) {
  // create instance
  const instance = axios.create({
    baseURL,
    timeout: 120000,
    headers: { Accept: '*/*' },
    withCredentials: true,
    paramsSerializer(params) {
      return stringify(params)
    },
  })

  const instanceR = axios.create({
    baseURL,
    timeout: 120000,
    headers: { Accept: '*/*' },
  })

  // add request interceptors
  instance.interceptors.request.use(beforeRequestInterceptor, errorRequestInterceptor)

  // add response interceptors
  instance.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor)

  // add request interceptors
  instanceR.interceptors.request.use(beforeRequestInterceptorR, errorRequestInterceptor)

  // add response interceptors
  instanceR.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor)

  return [instance, instanceR]
}

const [ProjectApi, ProjectApiR] = ApiInstanceFactory(envData.PROJECT_URL)

export { ProjectApi, ProjectApiR }
