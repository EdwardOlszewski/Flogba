import Head from 'next/head'
import Box from '@mui/material/Box'
import { makeStyles, Grid, Container, Typography } from '@material-ui/core'
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginTop: '2rem',
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  },
  container: {
    width: ' 100%',
    height: '100%',
    margin: 'auto',
    textAlign: 'center',
    padding: '1rem',
  },

  aboutText: {
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.5vmax',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vmax',
    },
  },
  img: {
    position: 'relative',
    height: '800px',
    minWidth: '400px',
    [theme.breakpoints.up('xs')]: {
      height: '500px',
    },
    [theme.breakpoints.up('md')]: {
      height: '100%',
    },
  },
}))

const AboutSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Head>
        <title>About Section</title>
      </Head>
      <Grid container spacing={0}>
        <Grid item sm={12} md={6} lg={4}>
          <Container className={classes.container}>
            <div className={classes.img}>
              <Image
                layout='fill'
                src='/images/aboutPicture.png'
                alt='aboutPicture'
                objectFit='contain'
              />
            </div>
          </Container>
        </Grid>

        <Grid item sm={12} md={6} lg={8}>
          <Container className={classes.container}>
            <Typography variant='h5' className={classes.aboutText}>
              <br />
              This picture is very special to me because my son Ryan called to
              invite me to a Cubs game. It was the first time in my life that
              one of my kids brought ME to a baseball game. Ryan received two
              tickets from the father of a very special player named Ivan, who
              is only 7 years old, and wanted to give his hitting instructor
              these tickets.
              <br />
              <br />
              Ryan is the President of, For the Love of the Game Baseball
              Academy. It was completely his idea to open this facility. Ryan
              and I have been giving baseball lessons to youngsters in our
              neighborhood for approximately 10 years.
              <br />
              <br />
              Ryan is presently playing right field for West Texas A&M college.
              Ryan has quickly become one of the top hitting coaches in our area
              due to his exposure to some of the best hitting coaches in the
              world while living in Phoenix, Arizona. He has a special gift with
              training young ballplayers. I’m very proud of his many
              accomplishments and I am truly blessed to have Ryan as my son.
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutSection
