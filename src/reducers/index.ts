import { combineReducers } from 'redux'
import { postsReducerObject, postsReducer } from './postReducer'

export interface StoreState {
  photo: postsReducerObject[]
}


export const rootReducer = combineReducers<StoreState>({
  posts: postsReducer
})