import React from "react"

const Button = props => {
  return <button onClick={e => props.action(e)}>{props.text}</button>
}

export default Button
