import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => (
    createStyles({
      root: {
        backgroundColor: theme.palette.grey['200']
      },
      container: {
        padding: theme.spacing(0, 8)
      },
      horizontalDividers: {
        border: 0,
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        borderColor: theme.palette.divider,
        borderStyle: 'solid'
      },
      notificationsButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(9),
          padding: theme.spacing(5, 6),
      },
    })
  ))

  export { useStyles }
