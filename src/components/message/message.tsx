import { useEffect, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

import type { FC } from 'react'
import type { MessageProps } from './type'

import './message.less'

const MessageComponent: FC<MessageProps> = (props) => {
  const { type = 'info', visible, message, onCancel, removeContainer, ...rest } = props

  const [open, setOpen] = useState(visible)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  const handleClose = () => {
    setOpen(false)
    onCancel?.()
    removeContainer?.()
  }

  return (
    <Snackbar
      className="d-message-wrapper"
      autoHideDuration={5000}
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
      {...rest}
    >
      <Alert className="d-message-content-wrapper" onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default MessageComponent
