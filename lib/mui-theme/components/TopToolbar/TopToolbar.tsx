import * as React from 'react'
import { AppBar, Box, Toolbar } from '@material-ui/core'

import { Logo, NotificationsButton, UserAvatar } from '../'
import { useStyles } from './TopToolbar.styles'

export default function TopToolbar () {
  const styles = useStyles()

  const handleNotificationClick = () => {
    console.log('Show notifications list')
  }

  return (
    <AppBar position='sticky' elevation={3} className={styles.root}>
      <Toolbar className={styles.container}>
        <Logo className={styles.logo} fill={'white'} />
        <Box className={styles.notificationsButton}>
          <NotificationsButton onClick={handleNotificationClick} />
        </Box>
        <UserAvatar
          alt='Juliana Demarque'
          className={styles.colorfulAvatar}
          dropdown
        >
          DE
        </UserAvatar>
      </Toolbar>
    </AppBar>
  )
}
