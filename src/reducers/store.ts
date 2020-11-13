import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

const initialState = {}

const middleware = [thunk]

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    process.env.NODE_ENV === 'test' ? (n: any) => n : composeWithDevTools()
  )
)

export default store
