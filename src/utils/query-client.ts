import { message } from 'antd'
import { QueryClient } from '@tanstack/react-query'

const onError = (error: any) => {
  if (!error.processed) message.error(error.message || '请求错误')
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
      onError,
    },
    mutations: {
      onError,
    },
  },
})

export { queryClient }
