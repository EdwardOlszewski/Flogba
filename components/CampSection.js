import Head from 'next/head'
import Box from '@mui/material/Box'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: 'auto',

    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
  },
  campDiv: {
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    margin: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    transition: '.3s',
    [theme.breakpoints.up('xs')]: {
      width: '12rem',
      height: '12rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '12rem',
      height: '12rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '12vmax',
      height: '12vmax',
    },
    '&:hover ': {
      cursor: 'pointer',
      backgroundImage: `url(${'../images/baseball.jpg'})`,
      background: 'center',
    },
  },
  campTitle: {
    textAlign: 'center',
    paddingBottom: '5rem',
    paddingTop: '2rem',
    color: 'white',
    [theme.breakpoints.up('xs')]: {
      fontSize: '5vmax',
    },
  },
  campTxt: {
    textAlign: 'center',
    float: 'left',
    marginTop: '3rem',

    [theme.breakpoints.up('xs')]: {
      fontSize: '200%',
    },

    [theme.breakpoints.up('lg')]: {
      fontSize: '2vmax',
    },
  },
  gridCol: {
    marginBottom: '3rem',
  },
  campDivTwo: {
    display: 'none',
  },
}))

const CampSection = () => {
  const classes = useStyles()

  return (
    <Box className='campSectionDiv'>
      <Head>
        <title>Camp Section</title>
      </Head>

      <Typography variant='h1' className={classes.campTitle}>
        Training Camps
      </Typography>

      <Grid container className={classes.root}>
        <Grid item xs={6} md={4} className={classes.gridCol}>
          <div className={classes.campDiv}>
            <p variant='h3' className={classes.campTxt}>
              Spring Training Camp
            </p>
          </div>
        </Grid>
        <Grid item xs={6} md={4} className={classes.gridCol}>
          <div className={classes.campDiv}>
            <Typography variant='h3' className={classes.campTxt}>
              Arizona Training Camp
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6} md={4} className={classes.gridCol}>
          <div className={classes.campDiv}>
            <Typography variant='h3' className={classes.campTxt}>
              Bat Speed <br /> & Power Camp
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6} md={4} className={classes.gridCol}>
          <div className={classes.campDiv}>
            <Typography variant='h3' className={classes.campTxt}>
              Baseball Speed Camp
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} md={4} className={classes.gridCol}>
          <div className={classes.campDiv}>
            <Typography variant='h3' className={classes.campTxt}>
              Winter Baseball Camp
            </Typography>
          </div>
        </Grid>

        <Grid item xs={6} md={4} className={classes.gridCol}>
          <div className={classes.campDiv}>
            <Typography variant='h3' className={classes.campTxt}>
              Baseball Throwing Camp
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CampSection
