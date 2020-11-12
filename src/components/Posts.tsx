import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import { postsReducerObject } from '../reducers/postsReducer'
import Card from './Card'

interface PostProps {
  posts: postsReducerObject[]
}

const Posts = ({ posts }: PostProps) => {
  return (
    <Box
      display={{ md: 'flex' }}
      flexWrap={{ md: 'wrap' }}
      maxWidth={{ md: '100%' }}
      justifyContent={{ md: 'space-between' }}
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
