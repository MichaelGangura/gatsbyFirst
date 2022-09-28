import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>It's a HOME PAGE</p>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>


export default IndexPage