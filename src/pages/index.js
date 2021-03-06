import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <SEO title='Home' description='wijayaac portfolio home page' />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title='featured projects' showLink />
      <Blogs blogs={blogs} title='newest article' showLink />
    </Layout>
  )
}

export const query = graphql`
{
  allStrapiProjects(filter: {featured:{eq:true}}){
    nodes{
        github
        url
        id
        description
        stack{
          id
          title
        }
        image{
          childImageSharp{
            fluid{
            ...childImageSharpFluid
          }
        }
      }
    }
  }
  allStrapiBlogs(sort: {fields: date,order:DESC}, limit:3){
    nodes{
      category
      content
      date(formatString: "MMM Do, YYYY")
      id
      image{
        childImageSharp{
          fluid{
            ...childImageSharpFluid
          }
        }
      }
      slug
      title
      desc
    }
  }
`
