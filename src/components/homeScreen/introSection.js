import React from "react"
import Img from "gatsby-image"
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

import "../../styles/css/screens/homescreen/intro-section.css"
import { graphql, StaticQuery } from "gatsby"

function IntroSection({ image, data }) {
  const social = data.site.siteMetadata.social
  const fullName = data.site.siteMetadata.authorFullName
  console.log(social)
  return (
    <section className="page-head intro-section">
      <div className="intro-text">
        <div>
          <h3>Hello, I'm</h3>
          <h1>{fullName}</h1>
          <h3 className="designation">Passionate Full Stack Developer</h3>
          <a
            className="button"
            href="Praneeth-Reddy-Kolanu-CV.pdf"
            download="Praneeth-Reddy-Kolanu-CV.pdf"
          >
            Download Resume
          </a>
          <div className="icons-container">
            <a href={social.github} target="_blank" rel="noreferrer">
              <FaGithub className="icon" target="_blank" />
            </a>
            <a href={social.linkedin}>
              <FaLinkedin className="icon" target="_blank" />
            </a>
            <a href={social.facebook}>
              <FaFacebook className="icon" target="_blank" />
            </a>
            <a href={"mailto:" + social.email}>
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </div>
      <Img className="intro-image" fluid={image} style={{ width: "400px" }} />
    </section>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        authorFullName
        social {
          github
          linkedin
          facebook
          email
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <IntroSection props data={data} {...props} />}
  />
)