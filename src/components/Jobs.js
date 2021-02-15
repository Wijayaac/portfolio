import React from "react"
import Title from "./Title"
import { MdNavigateNext } from "react-icons/md"
import { graphql, useStaticQuery, Link } from "gatsby"

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className='section jobs'>
      <Title title='experience' />
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={job.strapiId}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{position} </h3>
          <h4>{company} </h4>
          <p className='job-date'>{date}</p>
          {desc.map((item) => {
            return (
              <div className='job-desc' key={item.id}>
                <MdNavigateNext className='job-icon'></MdNavigateNext>
                <p>{item.name} </p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}
const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        position
        date
        desc {
          id
          name
        }
        company
      }
    }
  }
`
export default Jobs
