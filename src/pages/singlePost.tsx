import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/actions'
import ReactHtmlParser from 'react-html-parser'
import { Box, Text, Image, Spinner } from '@chakra-ui/core'
import { StoreState } from '../reducers'
import { postsReducerObject } from '../reducers/postsReducer'

interface SinglePostProps {
  posts: postsReducerObject[]
  match: any
  // fetchPosts(): any
}

const initialState: postsReducerObject = {
  id: 4581,
  date: '',
  date_gmt: '2020-11-06T14:50:50',
  guid: {},
  modified: '2020-11-06T15:00:55',
  modified_gmt: '2020-11-06T15:00:55',
  slug: 'characteristics-of-highly-effective-logos',
  status: 'publish',
  type: 'post',
  link: 'https://blog.epower.ng/characteristics-of-highly-effective-logos',
  title: {},
  content: {},
  excerpt: {},
  author: 14,
  featured_media: 4583,
  comment_status: 'closed',
  ping_status: 'closed',
  sticky: false,
  template: '',
  format: 'standard',
  meta: [],
  categories: [1],
  tags: [],
  post_author: {},
  featured_image_thumbnail:
    'https://blog.epower.ng/wp-content/uploads/2020/11/9M59bZ9irg-150x150.jpg',
  featured_image:
    'https://blog.epower.ng/wp-content/uploads/2020/11/9M59bZ9irg.jpg'
}

const SinglePost = ({ posts, match }: SinglePostProps) => {
  const postName = match.params.post

  const [post, setPost] = useState(initialState)
  const postArr = posts.filter((post) => post.slug === postName)
  const getPost = () => {
    setPost(postArr[0])
  }
  useEffect(() => {
    // fetchPosts()
    getPost()
  }, [posts])
  return (
    <>
      {post ? (
        <Box backgroundColor="#282c35" color="#ffff">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#5678"
            color="#ffff"
            mb={10}
            textAlign="center"
            w="100%"
            h="20vh"
          >
            <Box mb={5} fontSize={{ md: '5xl', xs: 'xl' }}>
              {ReactHtmlParser(post.title.rendered)}
            </Box>
            <Text fontSize="md">
              Published on {dayjs(post.date).format('YYYY MMMM DD')}
            </Text>
          </Box>
          <Box
            pl={{ md: '10rem', xs: '2rem' }}
            pr={{ md: '10rem', xs: '2rem' }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box mb={10}>
              <Image
                size="500px"
                objectFit="cover"
                src={post.featured_image}
                alt={post.slug}
              />
            </Box>
            <Box>
              <Box fontSize="sm">{ReactHtmlParser(post.content.rendered)}</Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor="#5678"
            color="#ffff"
            mt={10}
            textAlign="center"
            w="100%"
            h="20vh"
          >
            <Text fontSize="xl">Copyright 2020</Text>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="100%"
          minHeight="70vh"
        >
          <Spinner color="#ffff" size="xl" />
        </Box>
      )}
    </>
  )
}

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(SinglePost)
