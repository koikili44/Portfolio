import React from "react"

function Button(props) {
  const{name, background}= props
  
  return (
  <button className= {`${background} text-black rounded-2xl`}>
      {name}
    </button>
  )
}

export default Button