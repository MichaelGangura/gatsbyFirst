import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home page"/>
  )
}


export const Head = () => <Seo title="Home Page" />


export default IndexPage