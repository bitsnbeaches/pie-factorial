import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import { blue, pink } from '@material-ui/core/colors'

const globalOptions = {
  primary: {
    light: '#ff79b0',
    main: pink.A200,
    dark: '#c60055',
    contrastText: '#000000'
  },
  secondary: {
    light: '#c3fdff',
    main: blue[200],
    dark: '#5d99c6',
    contrastText: '#000000'
  },
  background: {
    default: '#f0f2f7'
  }
} as PaletteOptions

export default globalOptions
