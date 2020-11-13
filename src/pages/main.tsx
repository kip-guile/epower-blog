import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../reducers'
import { fetchPosts } from '../actions/actions'
import { Box, Text, Spinner } from '@chakra-ui/core'
import { postsReducerObject } from '../reducers/postsReducer'
import Posts from '../components/Posts'
import Pagination from '../components/Pagination'

interface MainComponentProps {
  fetchPosts(page: number): any
  posts: postsReducerObject[]
}

function Main({ fetchPosts, posts }: MainComponentProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  useEffect(() => {
    fetchPosts(currentPage)
  }, [currentPage])

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <Box
      display={{ md: 'flex' }}
      flexDirection={{ md: 'column' }}
      minWidth={{ md: '100vw' }}
      backgroundColor="#282c35"
      color="#fff"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#5678"
        color="#ffff"
        mb={10}
        textAlign="center"
        w="100%"
        h="20vh"
      >
        <Text fontSize="6xl">Epower Blog</Text>
      </Box>
      {posts.length ? (
        <>
          <Posts posts={posts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minWidth="100%"
          minHeight="70vh"
        >
          <Spinner size="xl" />
        </Box>
      )}
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
  )
}

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts }
}

export default connect(mapStateToProps, { fetchPosts })(Main)
