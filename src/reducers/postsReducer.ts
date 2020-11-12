import { ActionTypes } from '../actions/types'
import {fetchPostsAction} from '../actions/actions'

// {
//   id: 4581,
//   date: '',
//   date_gmt: '2020-11-06T14:50:50',
//   guid: {},
//   modified: '2020-11-06T15:00:55',
//   modified_gmt: '2020-11-06T15:00:55',
//   slug: 'characteristics-of-highly-effective-logos',
//   status: 'publish',
//   type: 'post',
//   link: 'https://blog.epower.ng/characteristics-of-highly-effective-logos',
//   title: {},
//   content: {},
//   excerpt: {},
//   author: 14,
//   featured_media: 4583,
//   comment_status: 'closed',
//   ping_status: 'closed',
//   sticky: false,
//   template: '',
//   format: 'standard',
//   meta: [],
//   categories: [1],
//   tags: [],
//   post_author: {},
//   featured_image_thumbnail:
//     'https://blog.epower.ng/wp-content/uploads/2020/11/9M59bZ9irg-150x150.jpg',
//   featured_image:
//     'https://blog.epower.ng/wp-content/uploads/2020/11/9M59bZ9irg.jpg',
//   _links: {}
// }

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

export const postsReducer = (state: postsReducerObject[] = [], action: fetchPostsAction) => {
  switch (action.type) {
    case ActionTypes.fetchPosts:
      return action.payload
    default:
      return state
  }
}
