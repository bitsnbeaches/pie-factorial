import { createTheme, Theme } from '@material-ui/core/styles'

import {
  globalPaletteOptions,
  globalTypographyOptions,
  spacing
} from './options'

export const muiGlobalTheme: Theme = createTheme({
  palette: { ...globalPaletteOptions },
  typography: { ...globalTypographyOptions },
  spacing
})
