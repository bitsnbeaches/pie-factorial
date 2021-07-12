import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `calc(100vh - ${theme.spacing(14)}px)`,
      padding: theme.spacing(0),
      backgroundColor: theme.palette.common.white
    },
    navItem: {
      position: 'relative',
      flexDirection: 'column',
      padding: theme.spacing(7, 6),
      color: theme.palette.secondary.light,
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
      '&.active:before': {
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: theme.spacing(4),
        backgroundColor: theme.palette.primary.main,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        content: '""'
      }
    }
  })
)

export { useStyles }
