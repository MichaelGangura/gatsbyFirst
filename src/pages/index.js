import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>It's a HOME PAGE</p>
      <StaticImage
        alt="Labrador"
        src="../images/labrador.JPG"
      />
    </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />


export default IndexPage