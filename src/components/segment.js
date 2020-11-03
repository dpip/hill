import React, { useState } from "react"

import { Fade, Flip } from "react-reveal"

import "../assets/scss/segment.scss"

const Segment = props => {
  const [content] = useState(props.content)
  return (
    <Flip top delay={props.time} duration={1000}>
      <span className={`segment ${props.type}`}>{content}</span>
    </Flip>
  )
}

export default Segment
