import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className='section blogs'>
      <Title title={title} />
      <div className='section-center blogs-center'>
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <Link to='/blogs' className='btn center-btn'>
          All Blogs
        </Link>
      )}
    </section>
  )
}

export default Blogs
