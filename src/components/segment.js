import React, { useState } from "react"

import randomize from "../utils/randomize"

const Segment = props => {
  const [content, genContent] = useState(props.content)

  console.log(content)
  return <div id={props.type}>{randomize(content)}</div>
}

export default Segment
