import React from 'react'
import {postsReducerObject} from '../reducers/postsReducer'

interface PostProps {
    posts: postsReducerObject[]
}

const Posts = ({posts}: PostProps) => {

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>{post.title.rendered}</div>
            ))}
        </div>
    )
}

export default Posts