import {createStore, applyMiddleware} from 'redux'
import componentReducer from './redux/componentReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import  logger  from "redux-logger";
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store