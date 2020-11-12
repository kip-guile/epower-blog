import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'
import { Box, Text, Image } from '@chakra-ui/core'
import { StoreState } from '../reducers'
import { postsReducerObject } from '../reducers/postsReducer'

interface SinglePostProps {
  posts: postsReducerObject[]
  match: any
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
    getPost()
    // window.localStorage.setItem('post', JSON.stringify(post))
  }, [])
  console.log(post)
  // const localpost = localStorage.getItem('post')
  // const persistedPost = localpost ? JSON.parse(localpost) : null
  // let photoToRender = post ? post : persistedPost
  return (
    <>
      {post ? (
        <Box>
          <Box>
            <Text fontSize="sm">{ReactHtmlParser(post.title.rendered)}</Text>
          </Box>
          <Box>
            <Image
              size="250px"
              objectFit="cover"
              src={post.featured_image}
              alt={post.slug}
            />
          </Box>
          <Box>
            <Text fontSize="sm">{ReactHtmlParser(post.content.rendered)}</Text>
          </Box>
        </Box>
      ) : (
        <Box>Loading...</Box>
      )}
    </>
  )
}

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts }
}

export default connect(mapStateToProps)(SinglePost)
