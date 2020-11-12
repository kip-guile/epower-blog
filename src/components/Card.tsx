import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { postsReducerObject } from '../reducers/postsReducer'

interface CardProps {
  post: postsReducerObject
}

const Card = ({ post }: CardProps) => {
  return (
    <Box display={{ md: 'flex' }} flexDirection={{ md: 'column' }} width={{ md: '30%' }}>
      <Image
        size="250px"
        objectFit="cover"
        src={post.featured_image_thumbnail}
        alt={post.slug}
      />
      <Text fontWeight='bold' fontSize="md">{post.title.rendered}</Text>
      <Text fontSize="sm">{ReactHtmlParser(post.excerpt.rendered)}</Text>
    </Box>
  )
}

export default Card
