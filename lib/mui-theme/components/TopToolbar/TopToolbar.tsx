import * as React from 'react'
import { AppBar, Box, Toolbar } from '@material-ui/core'
import clsx from 'clsx'

import { GetGoalLogo, NotificationsButton, UserAvatar } from '../'
import { useStyles } from './TopToolbar.styles'

const Home = () => {
  const styles = useStyles()
  const handleNotificationClick = () => {
    console.log('Abrir lista de notificações')
  }

  return (
    <AppBar position='sticky' elevation={0} className={styles.root}>
      <Toolbar className={styles.container}>
        <GetGoalLogo />
        <Box
          className={clsx(
            styles.horizontalDividers,
            styles.notificationsButton
          )}
        >
          <NotificationsButton onClick={handleNotificationClick} />
        </Box>
        <UserAvatar alt='Gato Fernandes' dropdown>
          GF
        </UserAvatar>
      </Toolbar>
    </AppBar>
  )
}

export default Home
