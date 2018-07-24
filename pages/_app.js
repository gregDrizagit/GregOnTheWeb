import App, {Container} from 'next/app'
import React from 'react'
import Nav from '../components/Nav'
import API from '../api'
var parseString = require('xml2js').parseString;


export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  state = {}

  componentDidMount(){

    let json =  API.getMediumRSS().then(textXml => {
      parseString(textXml, (err, xml) => {
        this.setState({json: xml.rss.channel[0]})
      })
    })
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
        <Nav />
      {
        this.state.json ?
          <Component {...pageProps} blogs={this.state.json} />
          :
          <Component {...pageProps} />
      }
    </Container>
  }
} 

