import React, { useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import {
  makeStyles,
  Hidden,
  IconButton,
  Divider,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import PhoneIcon from '@material-ui/icons/Phone'
import EmailIcon from '@material-ui/icons/Email'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import RoomIcon from '@mui/icons-material/Room'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import ScheduleIcon from '@mui/icons-material/Schedule'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 280,
  },
  fullList: {
    width: 'auto',
  },
  hamburgerIcon: {
    color: 'white',
    width: '5rem',
    height: '5rem',
  },
  icon: {
    width: '3rem',
    height: '3rem',
  },
}))

const MobileMenu = () => {
  const classes = useStyles()
  const [state, setState] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
    >
      <List style={{ paddingTop: '1rem' }}>
        <Link href='/#home'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link href='/#avaliability'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText primary='Avaliability' />
          </ListItem>
        </Link>

        <Link href='/#pricing'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <LocalOfferIcon />
            </ListItemIcon>
            <ListItemText primary='Pricing' />
          </ListItem>
        </Link>

        <Link href='/#camps'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <SportsBaseballIcon />
            </ListItemIcon>
            <ListItemText primary='Camps' />
          </ListItem>
        </Link>
        <br />
        <Divider />
        <br />
        <a href='tel:+17085994701'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary='(708) 599-4701 ' />
          </ListItem>
        </a>

        <a href='mailto:academy.SMM@gmail.com'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary='academy.SMM @gmail.com' />
          </ListItem>
        </a>

        <a href='https://www.facebook.com/pages/For%20the%20Love%20of%20the%20Game%20Baseball%20Academy/193448057347626/'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <FacebookIcon />
            </ListItemIcon>
            <ListItemText primary='Facebook' />
          </ListItem>
        </a>

        <a href='https://www.youtube.com/channel/UCNB8VGtEHEhPNcDN_fnHAbw'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary='YouTube' />
          </ListItem>
        </a>

        <a href='http://maps.google.com/?q=10004 S 76th Ave i, Bridgeview, IL 60455'>
          <ListItem button onClick={toggleDrawer('left', false)}>
            <ListItemIcon>
              <RoomIcon />
            </ListItemIcon>
            <ListItemText primary='10004 South 76th Avenue, Suite I. Bridgeview, Illinois' />
          </ListItem>
        </a>
      </List>
    </div>
  )

  return (
    <Hidden mdUp>
      <React.Fragment key={'left'}>
        <IconButton
          onClick={toggleDrawer('left', true)}
          className={classes.hamburgerIcon}
          id='back-to-top-anchor'
        >
          <MenuIcon fontSize='large' className={classes.icon} />
        </IconButton>

        <SwipeableDrawer
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </Hidden>
  )
}

export default MobileMenu
