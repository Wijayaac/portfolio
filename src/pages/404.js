import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className='error-page'>
        <h1>oops it's like you hit snag</h1>
        <Link to='/' className='btn'>
          back to home
        </Link>
      </main>
    </Layout>
  )
}

export default Error
