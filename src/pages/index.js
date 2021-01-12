import React, { useState } from "react"

import data from "../data/content.json"

import "../assets/scss/main.scss"

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

  const [active, activateBtn] = useState(false)

  const generate = e => {
    e.preventDefault(e)
    console.log("click")
    genSegments([
      randomize(data.who),
      randomize(data.what),
      randomize(data.wow),
    ])
    activateBtn(true)
    setTimeout(() => {
      activateBtn(false)
    }, 500)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className={"container"}>
        <div className={"segment-wrap"}>
          {segments.map((segment, index) => {
            console.log(Object.keys(data)[index])
            let time = Number(index + "99" - 99)
            return (
              <Segment
                key={segments[index]}
                type={Object.keys(data)[index]}
                content={segment}
                time={time}
              />
            )
          })}
        </div>
        <Button text={"Generate"} action={generate} active={active} />
      </div>
    </Layout>
  )
}

export default IndexPage
