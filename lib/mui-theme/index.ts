import { createTheme, Theme } from '@material-ui/core/styles'

import {
  globalPaletteOptions,
  globalTypographyOptions,
  mixins,
  spacing
} from './options'

export const muiGlobalTheme: Theme = createTheme({
  mixins: { ...mixins },
  palette: { ...globalPaletteOptions },
  spacing: spacing,
  typography: { ...globalTypographyOptions }
})
