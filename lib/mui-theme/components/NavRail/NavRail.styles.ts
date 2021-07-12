import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.common.white,

      '&> .MuiListItem-root': {
        padding: 0
      }
    },
    navItem: {
      position: 'relative',
      display: 'block',
      width: '100%',
      padding: '2.5vh 1.6em',
      color: theme.palette.primary.light,
      fontWeight: 500,
      letterSpacing: 0.15,
      lineHeight: '1.5rem',
      textAlign: 'center',

      '&:hover': {
        backgroundColor: grey['50'],
        color: theme.palette.primary.main,

        '& .MuiSvgIcon-root ': {
          color: theme.palette.primary.main
        }
      },

      '&.active': {
        '&:hover': {
          '& .MuiSvgIcon-root ': {
            color: theme.palette.primary.light
          }
        },

        '&::before': {
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: theme.spacing(8),
          backgroundColor: theme.palette.secondary.main,
          borderTopRightRadius: 4,
          borderBottomRightRadius: 4,
          content: '""'
        }
      },

      '&.Mui-disabled ': {
        color: grey[500]
      },

      '& .MuiSvgIcon-root ': {
        display: 'block',
        margin: 'auto'
      }
    }
  })
)

export { useStyles }
