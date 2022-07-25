import { createRoot } from 'react-dom/client'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'

import store from '@/store'
import Router from '@/router'
import history from '@/router/history'
import { createTheme } from '@/theme'

import '@/styles/index.less'

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider
        theme={createTheme({
          direction: 'ltr',
          responsiveFontSizes: true,
          mode: 'light',
        })}
      >
        <Provider store={store}>
          <Router history={history} />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as HTMLElement)

root.render(<App />)
