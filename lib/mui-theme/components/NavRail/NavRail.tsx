import * as React from 'react'
import ListItem from '@material-ui/core/ListItem'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import navrailItems, { MenuItem as MenuItemType } from '../../../../constants/navrail-items'
import { Link } from '..'
import { useStyles } from './NavRail.styles'

export default function NavRail ({ menuItems = navrailItems }: NavRailProps) {
  const styles = useStyles()

  return (
    <MenuList className={styles.root}>
      {menuItems.map(({ icon: Icon, label, ...props }) => (
        <ListItem key={`navrail-${label.toLowerCase()}`} disableGutters>
          <MenuItem className={styles.navItem} component={Link} {...props}>
            <Icon /> {label}
          </MenuItem>
        </ListItem>
      ))}
    </MenuList>
  )
}

export type NavRailProps = {
  menuItems: MenuItemType[]
}
