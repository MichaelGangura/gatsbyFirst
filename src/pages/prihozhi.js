import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Prihozhi = () => {
  return (
    <Layout pageTitle="Прихожі">
      <StaticImage
        alt="лора_тріо"
        src="../images/prihozhi/лора_тріо.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="палермо_блюз"
        src="../images/prihozhi/палермо_блюз.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Парма"
        src="../images/prihozhi/парма1.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Парма і Марк"
        src="../images/prihozhi/парма_марк.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Торіно"
        src="../images/prihozhi/торіно.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Оріон"
        src="../images/prihozhi/оріон.JPG"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Прихожі" description="Прихожі, тобто передпокої, малих і великих розмірів. Недорогі, українського виробництва. Купуйте в м. Стрий." />


export default Prihozhi