import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    home: strapiHome {
      Title
      introduction
      hero {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Hero = () => {
  const {
    home: {
      hero: {
        childImageSharp: { fluid },
      },
      introduction,
      title,
    },
  } = useStaticQuery(query)
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <Image fluid={fluid} className='hero-img' />
        <article className='hero-info'>
          <div>
            <div className='underline'> </div>
            <h1>{title} </h1>
            <h4>{introduction} </h4>
            <Link to='/contact' className='btn'>
              Contact Me
            </Link>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
