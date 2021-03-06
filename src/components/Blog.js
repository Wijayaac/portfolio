import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ title, image, category, date, slug, desc, id }) => {
  return (
    <Link to={`/blogs/${slug}`} className='blog' key={id}>
      <article>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className='blog-img' />
        )}
        <div className='blog-card'>
          <h4>{title} </h4>
          <p>{desc} </p>
          <div className='blog-footer'>
            <p>{category} </p>
            <p>{date} </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Blog
