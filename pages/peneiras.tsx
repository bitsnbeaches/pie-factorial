import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { NavRail, TopToolbar } from '../lib/mui-theme/components'

const Peneiras = () => (
  <>
    <TopToolbar />
    <Grid container>
      <NavRail />
      <Typography variant='h1'>Peneiras</Typography>
    </Grid>
  </>
)

export default Peneiras
