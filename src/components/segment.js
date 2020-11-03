import React, { useState } from "react"

import { Flip } from "react-reveal"

import "../assets/scss/segment.scss"

const Segment = props => {
  const [content] = useState(props.content)
  return (
    <Flip top delay={props.time}>
      <span className={`segment ${props.type}`}>{content}&nbsp;</span>
    </Flip>
  )
}

export default Segment
