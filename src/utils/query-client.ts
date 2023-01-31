import { QueryClient } from '@tanstack/react-query'

import { message } from '@/components'

const onError = (error: unknown) => {
  message.error((error as ResponseError).message || '请求错误')
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
