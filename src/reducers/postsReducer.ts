import { ActionTypes } from '../actions/types'
import { fetchPostsAction } from '../actions/actions'

export interface postsReducerObject {
  id: number
  date: string
  date_gmt: string
  guid: any
  modified: string
  modified_gmt: string
  slug: string
  status: string
  link: string
  type: string
  title: any
  content: any
  excerpt: any
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: any
  categories: any
  tags: any
  post_author: any
  featured_image_thumbnail: string
  featured_image: string
}

export const postsReducer = (
  state: postsReducerObject[] = [],
  action: fetchPostsAction
) => {
  switch (action.type) {
    case ActionTypes.fetchPosts:
      return action.payload
    default:
      return state
  }
}
