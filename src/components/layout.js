import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  tel,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <div className={tel}>локація м.Стрий | тел./viber 0965651211</div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link className={navLinkText} to="/">Головна</Link></li>
          <li className={navLinkItem}><Link className={navLinkText} to="/systemi">Системи</Link></li> 
          <li className={navLinkItem}><Link className={navLinkText} to="/prihozhi">Прихожі</Link></li> 
          <li className={navLinkItem}><Link className={navLinkText} to="/spalni">Спальні</Link></li> 
          <li className={navLinkItem}><Link className={navLinkText} to="/vitalni">Вітальні</Link></li> 
          <li className={navLinkItem}><Link className={navLinkText} to="/rizne">Різне</Link></li> 
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout