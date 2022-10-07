import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Rizne = () => {
  return (
    <Layout pageTitle="Різне">
      <StaticImage
        alt="Ліжко Верона"
        src="../images/rizne/ліжкаВерона.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Ліжка Тоні і Алекс"
        src="../images/rizne/тоні_алекс.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Столи різні"
        src="../images/rizne/столи1.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Столи різні"
        src="../images/rizne/столи2.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Столи різні"
        src="../images/rizne/столи3.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Столи різні"
        src="../images/rizne/столи4.JPG"
      />
      <br/>
      <hr/>
      <br/>
      <br/>
      <StaticImage
        alt="Тумби під взуття"
        src="../images/rizne/тумбиВзуття.JPG"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Різне" description="Столи письмові, журнальні столики, ліжка, ліжка двохярусні. Недорого, українського виробництва. Купуйте в м. Стрий." />


export default Rizne