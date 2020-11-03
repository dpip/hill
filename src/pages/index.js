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
            console.table("segment and index", segment, index, time)
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
        <div className={"link-section"}>
          <a
            href={
              "https://www.ibm.com/design/thinking/page/framework/keys/hills"
            }
            rel={"noreferrer"}
            target={"_blank"}
          >
            What the hill is a hill?
          </a>
          <a
            href={"https://www.dpip.dev/"}
            rel={"noreferrer"}
            target={"_blank"}
          >
            Who made this?
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
