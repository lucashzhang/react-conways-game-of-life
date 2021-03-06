import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'
import thunk from 'redux-thunk'

export default () => {
	return createStore(appReducer, applyMiddleware(thunk));
}

// export default (initialState={}) => {
// 	return applyMiddleware(thunk)(createStore)(appReducer, initialState)
// }