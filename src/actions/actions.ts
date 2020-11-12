import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'
import { postsReducerObject } from '../reducers/postsReducer'

export interface fetchPostsAction {
  type: ActionTypes.fetchPosts
  payload: postsReducerObject[]
}

export const fetchPosts = () => {
  return async (dispatch: Dispatch) => {
    // dispatch<isLoadingAction>({
    //   type: ActionTypes.isLoading,
    // })
    try {
      const response = await axios.get<postsReducerObject[]>(
        `https://blog.epower.ng/wp-json/wp/v2/posts`
      )
      //   console.log(response)
      //   dispatch response to reducers
      dispatch<fetchPostsAction>({
        type: ActionTypes.fetchPosts,
        payload: response.data
      })
    } catch (err) {
      // catch and handle errors
      //   dispatch<failedRequest>({
      //     type: ActionTypes.failedRequest,
      //   })
      console.log(err)
    }
  }
}
