import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'
import { postsReducerObject } from '../reducers/postsReducer'

export interface fetchPostsAction {
  type: ActionTypes.fetchPosts
  payload: postsReducerObject[]
}

export const fetchPosts = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<postsReducerObject[]>(
        `https://blog.epower.ng/wp-json/wp/v2/posts?per_page=6&page=${page}`
      )
      console.log(response.data)
      //   dispatch response to reducers
      dispatch<fetchPostsAction>({
        type: ActionTypes.fetchPosts,
        payload: response.data
      })
    } catch (err) {
      // catch and handle errors
      console.log(err)
    }
  }
}
