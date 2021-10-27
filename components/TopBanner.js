import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    margin: 'auto',
    width: '100%',
    height: '25vmin',
    backgroundImage: `url(${'../images/banner.png'})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.up('xs')]: {
      marginTop: '5rem',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '4rem',
    },
  },
}))

const TopBanner = () => {
  const classes = useStyles()
  return <Box className={classes.root}></Box>
}

export default TopBanner
