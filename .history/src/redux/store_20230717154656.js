import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';



import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}