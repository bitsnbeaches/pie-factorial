import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { NavRail, TopToolbar } from '../lib/mui-theme/components'

const Jogos = () => (
  <>
    <TopToolbar />
    <Grid container>
      <NavRail />
      <Typography variant='h1'>Jogos</Typography>
    </Grid>
  </>
)

export default Jogos
