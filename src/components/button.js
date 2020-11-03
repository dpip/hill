import React from "react"

import "../assets/scss/button.scss"

const Button = props => {
  return (
    <button
      className={`bubbly-button ${props.active}`}
      onClick={e => props.action(e)}
    >
      {props.text}
    </button>
  )
}

export default Button
