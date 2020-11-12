import { combineReducers } from 'redux'
import { postsReducerObject, postsReducer } from './postsReducer'

export interface StoreState {
  posts: postsReducerObject[]
}


export const rootReducer = combineReducers<StoreState>({
    posts: postsReducer
})