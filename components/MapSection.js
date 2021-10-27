import Box from '@mui/material/Box'
import { makeStyles, Grid, Container, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#844629',
    marginTop: '2rem',
    width: '100%',
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  },
  text: {
    color: 'white',

    [theme.breakpoints.up('xs')]: {
      fontSize: '5vmax',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '7vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.5vmax',
    },
  },
  textTwo: {
    color: '#e6e6e6',
    marginTop: '-15px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vmax',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '7vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4vmax',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.8vmax',
    },
  },
  map: {
    border: 0,
    width: '90%',
    height: '100%',
    minHeight: '400px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}))

const AboutSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={5}>
          <iframe
            className={classes.map}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.4707330044826!2d-87.81103538432215!3d41.71036008387303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e39b1dbfa4be7%3A0xa0e68bd3511a184d!2sFor%20the%20Love%20of%20the%20Game%20Baseball%20Academy!5e0!3m2!1sen!2sus!4v1635294170620!5m2!1sen!2sus'
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography variant='h2' className={classes.text}>
            Avaliability
          </Typography>
          <br />
          <Typography variant='h3' className={classes.text}>
            Monday - Friday
          </Typography>
          <div className={classes.line} />
          <Typography variant='h1' className={classes.textTwo}>
            4:00pm - 11:00pm
          </Typography>
          <br />
          <Typography variant='h3' className={classes.text}>
            Saturday/Sunday
          </Typography>
          <div className={classes.line} />
          <Typography variant='h1' className={classes.textTwo}>
            10:00 am - 4:00pm
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutSection
