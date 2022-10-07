import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Vitalni = () => {
  return (
    <Layout pageTitle="Вітальні">
      <StaticImage
        alt="Барон"
        src="../images/vitalni/барон.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Гламур і Берна"
        src="../images/vitalni/гламур-берна.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Кай"
        src="../images/vitalni/кайню-кай.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Каспій і Монтес"
        src="../images/vitalni/каспій_монтес.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Монтреал"
        src="../images/vitalni/монтреал.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Неон"
        src="../images/vitalni/неон-1_1.JPG"
      />
      <StaticImage
        alt="Неон"
        src="../images/vitalni/неон-1_2.JPG"
      />
      <StaticImage
        alt="Неон"
        src="../images/vitalni/неон-1_неон-2.JPG"
      />
      <StaticImage
        alt="Неон"
        src="../images/vitalni/неон-2_1.JPG"
      />
      <StaticImage
        alt="Неон"
        src="../images/vitalni/неон-2_2.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Орлеанс"
        src="../images/vitalni/орлеанс.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Тренто"
        src="../images/vitalni/тренто.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Трістан і Конго"
        src="../images/vitalni/трістан-конго.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Ферара"
        src="../images/vitalni/ферара.JPG"
      />
      <br />
      <hr />
      <br />
      <br />
      <StaticImage
        alt="Ріо"
        src="../images/vitalni/ріо-1_ріо-2.JPG"
      />
      <StaticImage
        alt="Ріо"
        src="../images/vitalni/ріо-3_ріо-4.JPG"
      />
      <StaticImage
        alt="Ріо"
        src="../images/vitalni/ріо_елем.JPG"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Вітальні" description="Вітальні або стінки, великі і малі. Недорого, українського виробництва. Купити в м. Стрий."/>


export default Vitalni