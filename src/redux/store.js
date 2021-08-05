import { applyMiddleware, createStore } from 'redux'
import { msgsReducer } from './reducer'
import thunk from 'redux-thunk'


export const store = createStore(msgsReducer, applyMiddleware(thunk))
