import Box from '@mui/material/Box'
import Head from 'next/head'
import {
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2rem',
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  title: {
    backgroundColor: '#474747',
    width: '100%',
    padding: '2rem',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
  },
  text: {
    color: 'white',
    [theme.breakpoints.up('xs')]: {
      fontSize: '4vmax',
    },
  },
  tblContainer: {
    padding: '1rem',
  },
  tblTxt: {
    padding: '1rem',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.5vmax',
    },
  },
}))

const PricingSection = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Head>
        <title>Pricing Section</title>
      </Head>

      <Box className={classes.title}>
        <Typography variant='h1' className={classes.text}>
          Pricing & Specials
        </Typography>
      </Box>

      <TableContainer elevation={0} className={classes.tblContainer}>
        <Table className={classes.table} aria-label='simple table'>
          <TableBody>
            <TableRow hover>
              <TableCell align='center' style={{ width: '50%' }}>
                <Typography variant='h2' noWrap className={classes.tblTxt}>
                  Daily
                </Typography>
              </TableCell>

              <TableCell align='left'>
                <Typography variant='h3' noWrap className={classes.tblTxt}>
                  $20 All you can hit <br />
                  $25 ½ hour cage rental (call ahead) <br />
                  $35 1 hour cage rental (call ahead)
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align='center' style={{ width: '50%' }}>
                <Typography variant='h2' noWrap className={classes.tblTxt}>
                  Team Specials
                </Typography>
              </TableCell>

              <TableCell align='left'>
                <Typography variant='h3' noWrap className={classes.tblTxt}>
                  $80 5 sessions (5 weeks)
                  <br />
                  $160 10 sessions
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align='center' style={{ width: '50%' }}>
                <Typography variant='h2' noWrap className={classes.tblTxt}>
                  Party Special
                </Typography>
              </TableCell>

              <TableCell align='left'>
                <Typography variant='h3' noWrap className={classes.tblTxt}>
                  $60 1 hour, 2 cages
                  <br />* add instructor for $20
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow hover>
              <TableCell align='center' style={{ width: '50%' }}>
                <Typography variant='h2' noWrap className={classes.tblTxt}>
                  Spring Camp
                </Typography>
              </TableCell>

              <TableCell align='left'>
                <Typography variant='h3' noWrap className={classes.tblTxt}>
                  $40 ½ hour private lesson
                  <br />
                  $40 ½ hour private lesson
                  <br />
                  $600 20 ½ hours of private lessons
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default PricingSection
