import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Paper, ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../styles/theme'
import '../styles/globals.css'
import TopBanner from '../components/TopBanner'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>Edward Olszewski</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <TopBanner />
        <Navbar />
        <Paper
          elevation={0}
          style={{
            background:
              'linear-gradient(0deg, hsla(0, 0%, 100%, 1) 0%, hsla(0, 0%, 97%, 1) 50%, hsla(0, 0%, 100%, 1) 100%)',
          }}
        >
          <Component {...pageProps} />
        </Paper>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
