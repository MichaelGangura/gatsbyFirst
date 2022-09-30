import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const AboutPage = () => {
  return (
    <Layout pageTitle="Про мене">
        <p>Hi there! I found a good javascript framework is Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Про мене" />


export default AboutPage