import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { Layout } from '../components'

export default function Create () {
  const [slices, setSlices] = React.useState('')

  const handleSlicesInputChange = event => setSlices(event.target.value)

  const handleFormSubmit = () => {
    const values = slices.split(',').map(Number.parseFloat)
    const sum = values.reduce((total, slice) => total + slice, 0)
    const percentages = values.map(slice => (slice * 100) / sum)

    console.log('Create pie chart')
    console.log(sum)
    console.log(percentages)
  }

  return (
    <Layout pageTitle='set flavors'>
      <Typography variant='body1' gutterBottom>
        create
      </Typography>
      <Box mb={32} pt={16} pb={8} clone>
        <Grid container>
          <Grid container item xs={9} justifyContent='space-between'>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label='Slice sizes'
                color='secondary'
                helperText='Use comma separated values'
                value={slices}
                onChange={handleSlicesInputChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Button variant='contained' color='primary' onClick={handleFormSubmit}>
        Bake!
      </Button>
      <svg
        width='400'
        height='400'
        viewBox='0 0 1024 1024'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='222'
          cy='222'
          r='198'
          stroke='red'
          strokeWidth='30'
          strokeDashoffset='100'
          strokeDasharray='20'
          startOffset='0'
        />
      </svg>
    </Layout>
  )
}
