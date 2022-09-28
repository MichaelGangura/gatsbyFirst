import * as React from 'react'
import Layout from '../components/layout'


const AboutPage = () => {
  return (
    <Layout pageTitle="Про мене">
        <p>Hi there! I found a good javascript framework is Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
      <title>Про мене</title>
      <meta name="description" content="Your description" />
    </>
  )


export default AboutPage