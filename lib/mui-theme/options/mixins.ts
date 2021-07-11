import { CSSProperties } from '@material-ui/core/styles/withStyles'
import createPalette from '@material-ui/core/styles/createPalette'

const defaultMuiPalette = createPalette({})

const contrastTextFromBgColor = bgColor => ({
  backgroundColor: bgColor,
  color: defaultMuiPalette.getContrastText(bgColor)
})

const horizontalDividers = color => ({
  border: 0,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderColor: color,
  borderStyle: 'solid'
})

declare module '@material-ui/core/styles/createMixins' {
  export interface Mixins {
    contrastTextFromBgColor: (bgColor: string) => CSSProperties
    horizontalDividers: (color: string) => CSSProperties
  }
}

const mixins = { contrastTextFromBgColor, horizontalDividers }

export default mixins
