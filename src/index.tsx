import { createRoot } from 'react-dom/client'
import { ConfigProvider, message } from 'antd'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'
import zhCN from 'antd/locale/zh_CN'

import store from '@/store'
import Router from '@/router'
import { queryClient } from '@/utils/query-client'

import '@/styles/index.less'

message.config({
  top: 70,
})

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Router />
        </Provider>
      </QueryClientProvider>
    </ConfigProvider>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(<App />)
