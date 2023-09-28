import React from 'react'
import Image from '../atoms/Image'
import Heart from '../atoms/Heart'
import Comment from '../atoms/Comment'
import ThreeDots from '../atoms/ThreeDots'
import CommentItem from '../molecules/CommentItem'

export default function Post(props) {
  const { src, username, comments=[] } = props

  return (
    <div className="post">
      <Image src={src} />
      <div className="action-btn-container">
        <Heart />
        <Comment />
        <ThreeDots />
      </div>
      <div>
        {comments.map((comment, index) => (
          <CommentItem key={index} username={comment.username} comment={comment.comment} />
        ))}
      </div>
    </div>
  )
}
