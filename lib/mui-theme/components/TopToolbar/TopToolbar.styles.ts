import { blueGrey, yellow } from '@material-ui/core/colors'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles(({ mixins, palette, spacing }: Theme) => {
  const avatarColor = blueGrey[700]
  const backgroundColor = palette.secondary.dark
  const dividerColor = yellow[50]
  const { contrastTextFromBgColor, horizontalDividers } = mixins

  return createStyles({
    root: {
      ...contrastTextFromBgColor(backgroundColor)
    },
    container: {
      padding: spacing(0, 24)
    },
    logo: {
      height: spacing(44),
      width: 'auto',
      fill: palette.common.white
    },
    notificationsButton: {
      marginLeft: 'auto',
      marginRight: spacing(32),
      padding: spacing(12, 16),
      ...horizontalDividers(dividerColor)
    },
    colorfulAvatar: {
      ...contrastTextFromBgColor(avatarColor)
    }
  })
})

export { useStyles }
