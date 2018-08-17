import {createStore } from 'redux'
import reducer from './reducer'

export default function configureStore(initialState = { data: {}, pos:[0,0] }) {
  return createStore(reducer, initialState)
}