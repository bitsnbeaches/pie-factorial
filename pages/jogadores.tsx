import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { NavRail, TopToolbar } from '../lib/mui-theme/components'

const Jogadores = () => (
  <>
    <TopToolbar />
    <Grid container>
      <NavRail />
      <Typography variant='h1'>Jogadores</Typography>
    </Grid>
  </>
)

export default Jogadores
