import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../reducers'
import {fetchPosts} from '../actions/actions'
import { Box } from "@chakra-ui/core";
import {postsReducerObject} from '../reducers/postsReducer'
import Posts from '../components/Posts';

interface MainComponentProps {
    fetchPosts(): any
    posts: postsReducerObject[]
}

function Main({fetchPosts, posts}: MainComponentProps) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(6)
    useEffect(() => {
        fetchPosts()
    }, [])
  return (
    <Box>
        <Posts posts={posts} />
    </Box>
  )
}

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts }
}

export default connect(mapStateToProps, {fetchPosts})(Main)
