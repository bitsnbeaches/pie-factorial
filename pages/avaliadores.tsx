import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { NavRail, TopToolbar } from '../lib/mui-theme/components'

const Avaliadores = () => (
  <>
    <TopToolbar />
    <Grid container>
      <NavRail />
      <Typography variant='h1'>Avaliadores</Typography>
    </Grid>
  </>
)

export default Avaliadores
