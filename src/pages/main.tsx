import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../reducers'
import {fetchPosts} from '../actions/actions'
import { Box } from "@chakra-ui/core";
import {postsReducerObject} from '../reducers/postsReducer'

interface MainComponentProps {
    fetchPosts(): any
    posts: postsReducerObject[]
}

function Main({fetchPosts, posts}: MainComponentProps) {
    useEffect(() => {
        fetchPosts()
    }, [])
  return (
    <Box>

    </Box>
  )
}

const mapStateToProps = ({ posts }: StoreState) => {
  return { posts }
}

export default connect(mapStateToProps, {fetchPosts})(Main)
