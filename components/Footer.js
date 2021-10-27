import React from 'react'
import {
  makeStyles,
  AppBar,
  Toolbar,
  Grid,
  Container,
  Typography,
  Divider,
} from '@material-ui/core'
import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import RoomIcon from '@mui/icons-material/Room'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'initial',
    marginBottom: 0,
    top: 'auto',
    backgroundColor: '#313851',
    padding: '1rem',
    textAlign: 'center',
    margin: 'auto',
    paddingTop: '2rem',
  },

  copyright: {
    padding: '1rem',
  },
  divider: {
    backgroundColor: '#3e3e3e',
    marginBottom: '2rem',
    marginTop: '1rem',
  },

  mainGrid: {
    textAlign: 'center',
    margin: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
    },

    [theme.breakpoints.up('md')]: {
      width: '90%',
    },
  },
  icon: {
    fontSize: '3rem',
    marginLeft: '.5rem',
    marginRight: '.5rem',
    transition: '.2s',
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5vmax',
    },
    '&:hover': {
      color: 'rgb(255, 255, 255, 0.50)',
    },
  },
  gridItem: {
    textAlign: 'center',
    margin: 'auto',
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vmax',
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const currentYear = new Date()

  return (
    <AppBar className={classes.appBar}>
      <Grid container spacing={2} className={classes.mainGrid}>
        <Grid item md={6} className={classes.gridItem}>
          <Typography variant='h3'>Connect with us</Typography>
          <Typography variant='subtitle1'>
            Reach us at academy.SMM@gmail.com or call <br />
          </Typography>
          <Typography variant='subtitle1'>
            us at (708) 599-4701 during our avliable hours
          </Typography>
        </Grid>
        <Grid item md={6} className={classes.gridItem}>
          <br />
          <a href='tel:+17085994701'>
            <PhoneIcon className={classes.icon} />
          </a>

          <a href='mailto:academy.SMM@gmail.com'>
            <EmailIcon className={classes.icon} />
          </a>

          <a href='https://www.facebook.com/pages/For%20the%20Love%20of%20the%20Game%20Baseball%20Academy/193448057347626/'>
            <FacebookIcon className={classes.icon} />
          </a>

          <a href='https://www.youtube.com/channel/UCNB8VGtEHEhPNcDN_fnHAbw'>
            <YouTubeIcon className={classes.icon} />
          </a>

          <a href='http://maps.google.com/?q=10004 S 76th Ave i, Bridgeview, IL 60455'>
            <RoomIcon className={classes.icon} />
          </a>
        </Grid>
      </Grid>

      <div className={classes.copyright}>
        <Divider className={classes.divider} />
        <Typography variant='caption'>
          ©{currentYear.getFullYear()} FOR THE LOVE OF THE GAME. ALL RIGHTS
          RESERVED.
        </Typography>
      </div>
    </AppBar>
  )
}

export default Footer
