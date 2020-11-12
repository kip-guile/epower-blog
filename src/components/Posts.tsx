import React from 'react'
import { postsReducerObject } from '../reducers/postsReducer'
import Card from './Card'

interface PostProps {
  posts: postsReducerObject[]
}

const Posts = ({ posts }: PostProps) => {
  return (
    <div>
      {posts.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  )
}

export default Posts
