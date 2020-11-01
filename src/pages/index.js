import React from "react"

import data from "../data/content.json"

import Layout from "../components/layout"
import Segment from "../components/segment"
import SEO from "../components/seo"

import Button from "../components/button"

const segments = [data.who, data.what, data.wow]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hill generator</h1>
      {segments.map((segment, index) => {
        return <Segment key={index} type={segment} content={segments[index]} />
      })}
      <Button text={"Generate"} />
    </Layout>
  )
}

export default IndexPage
