import {applyMiddleware , legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'

const root = './combine.js'

const store = legacy_createStore(root,applyMiddleware(thunk))

export default store