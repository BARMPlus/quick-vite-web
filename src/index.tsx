import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { QueryClientProvider } from '@tanstack/react-query'

import store from '@/store'
import Router from '@/router'
import { createTheme } from '@/theme'
import { queryClient } from '@/utils/query-client'

import '@/styles/index.less'

const theme = createTheme({
  direction: 'ltr',
  responsiveFontSizes: true,
  mode: 'light',
})

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <Router />
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(<App />)
