import React from 'react'

export default function TextComment(props) {
  const { comment } = props
  return (
    <div className="text-comment">{comment}</div>
  )
}
