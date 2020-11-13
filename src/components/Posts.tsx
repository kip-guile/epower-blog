import React from 'react'
import { Box } from '@chakra-ui/core'
import { postsReducerObject } from '../reducers/postsReducer'
import Card from './Card'

interface PostProps {
  posts: postsReducerObject[]
}

const Posts = ({ posts }: PostProps) => {
  return (
    <Box
      display={{ md: 'flex', xs: 'flex' }}
      flexDirection={{ md: 'row', xs: 'column' }}
      flexWrap={{ md: 'wrap' }}
      maxWidth={{ md: '100%' }}
      minWidth={{ md: '100%' }}
      alignItems={{ xs: 'center' }}
      justifyContent={{ md: 'space-between', xs: 'center' }}
      pl={{ md: 10 }}
      pr={{ md: 10 }}
    >
      {posts.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </Box>
  )
}

export default Posts
