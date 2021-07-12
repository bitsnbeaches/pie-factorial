import * as React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { NavRail, TopToolbar } from '../lib/mui-theme/components'

const Configuracoes = () => (
  <>
    <TopToolbar />
    <Grid container>
      <NavRail />
      <Typography variant='h1'>Configurações</Typography>
    </Grid>
  </>
)

export default Configuracoes
