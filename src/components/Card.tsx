import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { postsReducerObject } from '../reducers/postsReducer'
import { NavLink } from 'react-router-dom'

interface CardProps {
  post: postsReducerObject
}

const Card = ({ post }: CardProps) => {
  const link = `/${post.slug}`
  return (
    <>
      <Box
        display={{ md: 'flex' }}
        flexDirection={{ md: 'column' }}
        maxWidth={{ md: '30%' }}
        marginBottom={{ md: 5 }}
        marginTop={{ md: 5 }}
        alignItems={{ md: 'center' }}
      >
        <NavLink to={link}>
          <Image
            size="250px"
            objectFit="cover"
            src={post.featured_image_thumbnail}
            alt={post.slug}
          />
          <Text fontWeight="bold" fontSize="md">
            {post.title.rendered}
          </Text>
          <Text fontSize="sm">{ReactHtmlParser(post.excerpt.rendered)}</Text>
        </NavLink>
      </Box>
    </>
  )
}

export default Card
