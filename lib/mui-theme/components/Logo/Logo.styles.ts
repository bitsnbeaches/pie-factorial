import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = ({ fill, height: maxHeight, width: maxWidth }) =>
  makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        width: 'auto',
        color: fill || theme.palette.primary.main
      },
      logo: {
        height: Boolean(maxHeight) ? maxHeight : '100%',
        width: Boolean(maxWidth) ? maxWidth : '100%'
      }
    })
  )()

export { useStyles }
