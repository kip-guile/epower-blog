import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import { postsReducerObject } from '../reducers/postsReducer'

interface CardProps {
  post: postsReducerObject
}

const Cards = ({ post }: CardProps) => {
  return (
    <Box display={{ md: 'flex' }} flexDirection={{ md: 'column' }}>
      <Image
        size="250px"
        objectFit="cover"
        src={post.featured_image_thumbnail}
        alt={post.slug}
      />
      <Text fontSize="sm">{post.slug}</Text>
    </Box>
  )
}

export default Cards
