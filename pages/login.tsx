import * as React from 'react'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import {
  makeStyles,
  createStyles,
  useTheme,
  Theme
} from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import PasswordIcon from '@material-ui/icons/LockOutlined'

import { Paths } from '../constants/routes'
import { Link } from '../lib/mui-theme/components'
import { navigateToPath } from '../lib/utils/navigation'

const useStyles = makeStyles(({ palette, spacing }: Theme) => {
  return createStyles({
    header: {
      marginBottom: spacing(24)
    },
    row: {
      paddingTop: spacing(16),
      paddingBottom: spacing(24)
    },
    divider: {
      position: 'relative',
      marginTop: spacing(0),
      marginBottom: spacing(24)
    },
    dividerText: {
      position: 'absolute',
      top: spacing(-16),
      margin: 'auto',
      padding: spacing(8),
      backgroundColor: palette.common.white,
      letterSpacing: 0.1,
      textAlign: 'center'
    },
    fields: {
      paddingTop: spacing(8),
      paddingBottom: spacing(12)
    }
  })
})

export default withRouter(function Login ({ router }: WithRouterProps) {
  const styles = useStyles()
  const { spacing } = useTheme()

  const navigateToAuthedApp = React.useCallback(
    () => navigateToPath(router)(Paths.Visualize),
    [router]
  )

  const loginWithGoogle = () => {
    console.log('Sign In with Google')
  }

  const loginWithFacebook = () => {
    console.log('Sign In with Facebook')
  }

  return (
    <Box display='flex' alignItems='center' height='100vh'>
      <Box
        flex={1}
        pt={spacing(40)}
        pb={spacing(24)}
        bgcolor='white'
        borderRadius={16}
        clone
      >
        <Container component='main' maxWidth='sm' disableGutters>
          <Box px={32} clone>
            <form>
              <header className={styles.header}>
                <Typography variant='h2'>
                  Visualize simple data simply.
                </Typography>
                <Typography
                  variant='subtitle2'
                  color='textSecondary'
                  gutterBottom
                >
                  Want to save your charts online?{' '}
                  <Typography color='primary' variant='inherit'>
                    <Link href='/profile'>Sign up and setup syncing.</Link>
                  </Typography>
                </Typography>
              </header>
              <Grid container justifyContent='center'>
                <Grid
                  container
                  item
                  xs={10}
                  justifyContent='space-around'
                  className={styles.row}
                >
                  <Grid item xs={5}>
                    <Button
                      fullWidth
                      variant='outlined'
                      color='secondary'
                      onClick={loginWithGoogle}
                    >
                      Login with Google
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      fullWidth
                      variant='outlined'
                      color='secondary'
                      onClick={loginWithFacebook}
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                </Grid>
                <Grid item xs={10} className={styles.divider}>
                  <Typography variant='caption' className={styles.dividerText}>
                    or login with your account
                  </Typography>
                  <Divider />
                </Grid>
                <Grid container item xs={10} justifyContent='center'>
                  <Grid item xs={11} className={styles.fields}>
                    <TextField
                      label='Account'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccountCircle />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={11} className={styles.fields}>
                    <TextField
                      label='Password'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PasswordIcon />
                          </InputAdornment>
                        )
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} className={styles.fields}>
                    <Button
                      color='secondary'
                      fullWidth
                      onClick={navigateToAuthedApp}
                      variant='contained'
                    >
                      Start Baking!
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </Box>
    </Box>
  )
})
