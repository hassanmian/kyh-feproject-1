import React from 'react'

export default function Image(props) {
  const { src, alt } = props
  return (
    <img className="image" src={src} alt={alt} />
  )
}




