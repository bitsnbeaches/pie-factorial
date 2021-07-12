import * as React from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import { Layout } from '../components'

export default function NewProfile () {
  const handleFormSubmit = () => {
    console.log('Create new profile')
  }

  return (
    <Layout pageTitle='new profile'>
      <Typography variant='body1' gutterBottom>
        register
      </Typography>
      <Box mb={32} pt={16} pb={8} clone>
        <Grid container>
          <Grid container item xs={9} justifyContent='space-between'>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label='Name'
                color='secondary'
                helperText='Tell us whichever name you prefer'
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label='ID'
                color='secondary'
                helperText='Your unique account code &#124; read only'
                aria-readonly
              />
            </Grid>
          </Grid>
          <Grid container item xs={9} justifyContent='space-between'>
            <Grid item xs={5}>
              <TextField
                fullWidth
                label='E-mail'
                color='secondary'
                helperText='This address will be used as your login'
              />
            </Grid>
            <Typography>Display e-mail publicly</Typography>
            <Switch
              checked={false}
              onChange={() => {}}
              name='checkedA'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
      </Box>
      <Button variant='contained' color='primary' onClick={handleFormSubmit}>
        Review information
      </Button>
    </Layout>
  )
}
