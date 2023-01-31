import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import { isObject } from 'lodash-es'

import MessageComponent from './message'

import type { MessageFuncAttributes } from './type'

function render({ props, config }) {
  const { container } = config

  const root = createRoot(container)
  root.render(
    <StyledEngineProvider injectFirst>
      <MessageComponent {...props} />
    </StyledEngineProvider>,
  )
}

function notification(type, data) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const removeContainer = () => {
    container && document.body.removeChild(container)
  }

  const attribute = isObject(data) ? data : { message: data }

  const currentProps = { type, visible: true, removeContainer, ...attribute }
  const currentConfig = { container }
  render({ props: currentProps, config: currentConfig })
}

const message = {
  info(data: MessageFuncAttributes) {
    return notification('info', data)
  },
  success(data: MessageFuncAttributes) {
    return notification('success', data)
  },
  warning(data: MessageFuncAttributes) {
    return notification('warning', data)
  },
  error(data: MessageFuncAttributes) {
    return notification('error', data)
  },
}

export { message }

export default MessageComponent
