import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = (props) => {
  return (
    <Layout>
      {props.data.allBook.nodes.map(node => (
        <div key={node.id}>
          <h2>
            {node.title} - <small>{node.author.name}</small>
          </h2>
          <div>{node.summary}</div>
          <Link to={`/book/${node.id}`}>
            Join conversation
            </Link>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
{
  allBook {
    nodes {
      title
      author {
        name
      }
      id
      summary
    }
  }
}`;

export default IndexPage
