import React, { useState, useEffect } from "react"

import data from "../data/content.json"

import Layout from "../components/layout"
import Segment from "../components/segment"
import SEO from "../components/seo"

import Button from "../components/button"

import randomize from "../utils/randomize"

const IndexPage = () => {
  const [segments, genSegments] = useState([
    randomize(data.who),
    randomize(data.what),
    randomize(data.wow),
  ])

  const generate = e => {
    // e.preventDefault()
    console.log("click")
    genSegments([
      randomize(data.who),
      randomize(data.what),
      randomize(data.wow),
    ])
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hill generator</h1>
      {segments.map((segment, index) => {
        console.log(segments[index])
        return (
          <Segment
            key={segments[index]}
            type={segment}
            content={segments[index]}
          />
        )
      })}
      {segments[0]}
      <Button text={"Generate"} action={generate} />
    </Layout>
  )
}

export default IndexPage
