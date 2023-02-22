import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"

export default function Projects({ data }) {
  console.log(data)
  // const projects = data.allMarkdownRemark.nodes
  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h2>Projects & Website I've Created</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
    query ProjectsPage {
      projects: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
      contact: site {
        siteMetadata {
          contact
        }
      }
    }  
`;
