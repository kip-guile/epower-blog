import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'
import ReactHtmlParser from 'react-html-parser'
import { postsReducerObject } from '../reducers/postsReducer'
import { NavLink } from 'react-router-dom'

interface CardProps {
  post: postsReducerObject
}

const Card = ({ post }: CardProps) => {
  const link = `/posts/${post.slug}`
  return (
    <>
      <Box
        display={{ md: 'flex' }}
        flexDirection={{ md: 'column' }}
        justifyContent={{ md: 'center' }}
        alignItems={{ md: 'center' }}
        maxWidth={{ md: '30%', xs: '85%' }}
        marginBottom={{ md: 5, xs: 5 }}
        textAlign="center"
        p={10}
        h={{ md: '35rem' }}
        color="black"
        backgroundColor="#ffff"
        boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
        transition="0.3s"
      >
        <NavLink to={link}>
          <Box m={5} display={{ md: 'flex' }} justifyContent={{ md: 'center' }}>
            <Image
              size="200px"
              objectFit="cover"
              src={post.featured_image_thumbnail}
              alt={post.slug}
            />
          </Box>
          <Text mb={5} fontWeight="bold" fontSize="lg">
            {post.title.rendered}
          </Text>
          <Box fontSize="sm">{ReactHtmlParser(post.excerpt.rendered)}</Box>
        </NavLink>
      </Box>
    </>
  )
}

export default Card
