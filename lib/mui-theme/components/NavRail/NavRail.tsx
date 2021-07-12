import * as React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import CalendarIcon from '@material-ui/icons/EventOutlined'
import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import PeopleIcon from '@material-ui/icons/PeopleOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import SoccerIcon from '@material-ui/icons/SportsSoccerOutlined'
import SportsIcon from '@material-ui/icons/SportsOutlined'
import StarHalfIcon from '@material-ui/icons/StarHalf'

import { Link } from '..'
import { useStyles } from './NavRail.styles'

function NavRail () {
  const styles = useStyles()

  return (
    <MenuList className={styles.root}>
      <MenuItem className={styles.navItem} component={Link} href='/'>
        <DashboardIcon /> Dashboard
      </MenuItem>
      <MenuItem className={styles.navItem} component={Link} href='/peneiras'>
        <SoccerIcon /> Peneiras
      </MenuItem>
      <MenuItem className={styles.navItem} component={Link} href='/calendario'>
        <CalendarIcon /> Calendário
      </MenuItem>
      <MenuItem className={styles.navItem} component={Link} href='/jogos'>
        <SportsIcon /> Jogos
      </MenuItem>
      <MenuItem className={styles.navItem} component={Link} href='/jogadores'>
        <PeopleIcon /> Jogadores
      </MenuItem>
      <MenuItem className={styles.navItem} component={Link} href='/avaliadores'>
        <StarHalfIcon /> Avaliadores
      </MenuItem>
      <MenuItem
        className={styles.navItem}
        component={Link}
        href='/configuracoes'
      >
        <SettingsIcon /> Configurações
      </MenuItem>
    </MenuList>
  )
}

export default NavRail
