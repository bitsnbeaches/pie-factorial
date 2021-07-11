import { TypographyOptions } from '@material-ui/core/styles/createTypography'

const globalOptions = {
  fontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(','),
  fontSize: 14,
  h1: {
    color: '#4d4d4d',
    fontSize: '2rem',
    fontWeight: 700
  },
  h2: {
    color: '#4d4d4d',
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: '2rem'
  }
} as TypographyOptions

export default globalOptions
