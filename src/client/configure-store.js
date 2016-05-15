import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState)

  return store
}
