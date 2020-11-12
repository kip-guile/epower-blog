import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../reducers'
import { fetchPosts } from '../actions/actions'
import { Box } from '@chakra-ui/core'
import { postsReducerObject } from '../reducers/postsReducer'
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'

interface MainComponentProps {
  fetchPosts(): any
  posts: postsReducerObject[]
}

function Main({ fetchPosts, posts }: MainComponentProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(6)

  useEffect(() => {
    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Box
      display={{ md: 'flex' }}
      flexDirection={{ md: 'column' }}
      maxWidth={{ md: '100vw' }}
      p={{ md: 5 }}
    >
      <Posts posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </Box>
  )
}

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(Main)
