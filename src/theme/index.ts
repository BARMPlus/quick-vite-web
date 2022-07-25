import type { Direction, Theme } from '@mui/material'
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from '@mui/material/styles'
import { baseThemeOptions } from './base-theme-options'
import { darkThemeOptions } from './dark-theme-options'
import { lightThemeOptions } from './light-theme-options'

declare module '@mui/material/styles' {
  interface Theme {
    sidebar: {
      width: number
      shrinkWidth: number
    }
    navbar: {
      height: string
    }
  }
  interface ThemeOptions {
    sidebar?: {
      width?: number
      shrinkWidth: number
    }
    navbar?: {
      height?: number
    }
  }
}

interface ThemeConfig {
  direction?: Direction
  responsiveFontSizes?: boolean
  mode: 'light' | 'dark'
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions,
    config.mode === 'dark' ? darkThemeOptions : lightThemeOptions,
    {
      direction: config.direction,
    },
  )

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return theme
}
