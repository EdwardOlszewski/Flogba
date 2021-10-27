import React from 'react'
import { makeStyles, Hidden, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Box from '@mui/material/Box'
import MobileMenu from '../components/MobileMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#3b4911',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  title: { marginLeft: theme.spacing(5), margin: 'auto' },
  buttonBox: {
    marginRight: theme.spacing(5),
    margin: 'auto',
  },
  button: { display: 'inline-block', marginLeft: '10px', marginRight: '10px' },

  zoom: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}))

function ScrollTop(props) {
  const { children, window } = props
  const classes = useStyles()

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  })

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.zoom}>
        {children}
      </div>
    </Zoom>
  )
}

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <Box id='back-to-top-anchor'>
      <AppBar position='fixed' className={classes.root} elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant='h2'>
            FLOGBA
          </Typography>
          <Hidden smDown>
            <Box className={classes.buttonBox}>
              <a href='/#home'>
                <Typography className={classes.button} variant='h4'>
                  Home
                </Typography>
              </a>

              <a href='/#avaliability'>
                <Typography className={classes.button} variant='h4'>
                  Avaliability
                </Typography>
              </a>

              <a href='/#pricing'>
                <Typography className={classes.button} variant='h4'>
                  Pricing
                </Typography>
              </a>

              <a href='/#camps'>
                <Typography className={classes.button} variant='h4'>
                  Camps
                </Typography>
              </a>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <MobileMenu />
          </Hidden>
        </Toolbar>
      </AppBar>

      <ScrollTop>
        <Fab
          style={{ backgroundColor: '#3b4911', color: 'white' }}
          aria-label='scroll back to top'
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}
