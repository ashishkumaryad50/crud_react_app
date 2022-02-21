import listReducer from './listReducer'
import { createStore ,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(listReducer,
    // {},

  composeWithDevTools(
//   applyMiddleware(...middleware),
  // other store enhancers if any
),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;


