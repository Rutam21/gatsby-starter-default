import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1></h1>
    <p>Welcome to my profile</p>
    <p>Please have a look to know more about my job profile.</p>
     <h2>Black/Dark Table</h2>           
  <Table stripped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Institution Name</th>
        <th>Grade</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>C.V. Raman College of Engineering</td>
        <td>B.Tech, Computer Science and Engineering</td>
        <td>7.25</td>
      </tr>
    </tbody>
  </Table>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
