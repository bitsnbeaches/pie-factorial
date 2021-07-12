import * as React from 'react'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { Layout } from '../components'

export default function Visualize () {
  return (
    <Layout pageTitle='my charts'>
      <Typography variant='body1'>visualize</Typography>

      <Box
        mb={32}
        pt={56}
        pb={8}
        maxWidth='90%'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Typography variant='body1' align='center'>
          {`Let's get to baking some fresh pies!`}
        </Typography>
        <Link href='/create'>Start by creating your first chart</Link>
      </Box>
    </Layout>
  )
}
