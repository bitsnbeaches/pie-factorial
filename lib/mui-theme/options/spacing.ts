import { SpacingOptions } from '@material-ui/core/styles/createSpacing'

const spacing: SpacingOptions = (factor: GridUnits) =>
  !Boolean(factor) ? 0 : `${factor * 0.0625}rem`

type GridUnits =
  | 0
  | 1
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80

export default spacing
