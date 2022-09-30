import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { postTitle } from './post.module.css'


const Posts = () => {

    const posts = useStaticQuery(
        graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
              nodes {
                frontmatter {
                  date(formatString: "MMMM D, YYYY")
                  title
                }
                id
                excerpt
              }
            }
          }
        `
    )

    return (
        posts.allMdx.nodes.map((t) => {
            return (
                <div>
                    <div className={postTitle}>{t.frontmatter.title}</div>
                    <div>{t.frontmatter.date}</div>
                </div>
            )
        })
    )
}

export default Posts