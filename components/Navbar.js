import Link from 'next/link'
import {
  makeStyles,
  Hidden,
  Typography,
  AppBar,
  Toolbar,
  Fab,
  Zoom,
  useScrollTrigger,
} from '@material-ui/core'
import Box from '@mui/material/Box'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
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
  button: {
    display: 'inline-block',
    marginLeft: '10px',
    marginRight: '10px',
    transition: '.2s',
    '&:hover': {
      cursor: 'pointer',
      color: 'rgb(255,255,255,.50)',
    },
  },

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
const Navbar = () => {
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
              <Link href='/#home'>
                <Typography className={classes.button} variant='h4'>
                  Home
                </Typography>
              </Link>

              <Link href='/#avaliability'>
                <Typography className={classes.button} variant='h4'>
                  Avaliability
                </Typography>
              </Link>

              <Link href='/#pricing'>
                <Typography className={classes.button} variant='h4'>
                  Pricing
                </Typography>
              </Link>

              <Link href='/#camps'>
                <Typography className={classes.button} variant='h4'>
                  Camps
                </Typography>
              </Link>
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

export default Navbar
