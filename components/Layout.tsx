import * as React from 'react'
import { useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import navrailItems from '../constants/navrail-items'
import { NavRail, TopToolbar } from '../lib/mui-theme/components'

export default function Layout ({ children, pageTitle }) {
  const { spacing } = useTheme()

  return (
    <>
      <TopToolbar /* toolbar height: 4.5rem / 72px */ />
      <Box display='flex' mt={spacing(-72)} height='100vh' pt={spacing(72)}>
        <NavRail menuItems={navrailItems} />
        <Box component='main' width='100%' p={spacing(32, 24, 20)}>
          <Typography variant='h1'>{pageTitle}</Typography>
          {children}
        </Box>
      </Box>
    </>
  )
}
