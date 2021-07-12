import * as React from 'react'
import { Grid } from '@material-ui/core'

import { NavRail, TopToolbar } from '../lib/mui-theme/components'

const Dashboard = () => (
  <>
    <TopToolbar />
    <Grid container>
      <NavRail />
    </Grid>
  </>
)

export default Dashboard
