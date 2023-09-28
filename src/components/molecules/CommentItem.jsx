import React from 'react'
import TextUsername from '../atoms/TextUsername'
import TextComment from '../atoms/TextComment'

export default function CommentItem(props) {
  const { username, comment } = props
  return (
    <div>
      <TextUsername username={username} />
      <TextComment comment={comment} />
    </div>
  )
}
