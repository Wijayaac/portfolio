import React from "react"
import Image from "gatsby-image"
import { useStaticQuery } from "gatsby"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <section className='section bg-grey'>
      <Title className='services'>
        <Image className='hero-img' />
        <div className='section-center services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className='serivce' key={id}>
                {icon}
                <h4>{title}</h4>
                <div className='underline'></div>
                <p>{text} </p>
              </article>
            )
          })}
        </div>
      </Title>
    </section>
  )
}
const query = graphql`
  {
    file(relativePath: { eq: "services-image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Services
