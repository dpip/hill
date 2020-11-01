import React, { useState } from "react"

const Segment = props => {
  const [content, genContent] = useState(props.content)
  return <div id={props.type}>{content}</div>
}

export default Segment
