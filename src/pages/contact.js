import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Services"

const contact = () => {
  return (
    <Layout>
      <SEO title='Contact' />
      <section className='contact-page'>
        <article className='contact-form'>
          <h3>get in touch</h3>
          <form action='https://formspree.io/f/xeqpngoj' method='post'>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                placeholder='Who are you ?'
                className='form-control'
              />
              <input
                type='email'
                name='email'
                placeholder='fill with your email'
                className='form-control'
              />
              <textarea
                name='message'
                id=''
                rows='5'
                className='form-control'
                placeholder='place your message here :)'
              ></textarea>
            </div>
            <button className='submit-btn btn' type='submit'>
              send message
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
