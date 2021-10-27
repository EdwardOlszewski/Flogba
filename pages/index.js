import Head from 'next/head'
import AboutSection from '../components/AboutSection'
import MapSection from '../components/MapSection'
import PricingSection from '../components/PricingSection'
import CampSection from '../components/CampSection'
import { makeStyles } from '@material-ui/core'
import Navbar from '../components/Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f1f1f1',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div id='home' className={classes.root}>
      <div id='about' />
      <AboutSection />

      <div id='avaliability' />
      <MapSection />

      <div id='pricing' />
      <PricingSection />

      <div id='camps' />
      <CampSection />
    </div>
  )
}
