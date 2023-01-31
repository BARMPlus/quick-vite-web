import type { SnackbarProps } from '@mui/material'

export interface MessageProps extends SnackbarProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  visible: boolean
  message: string
  onCancel?: () => void
  removeContainer?: () => void
}

export type MessageFuncAttributes = string | MessageProps
