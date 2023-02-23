import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import Img from "gatsby-image";

export default function Home( {data} ) {
 
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design!!!</h2>
          <h3>Develop & Deploy</h3>
          <p>US Designer $ web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid        
        }
      }
    }
  }
`;

/*

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        src
        srcSet
        sizes
      }
    }
  }
}

` 

*/
