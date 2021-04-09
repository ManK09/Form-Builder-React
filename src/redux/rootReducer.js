import {combineReducers} from 'redux'
import componentReducer from './componentReducer'


const rootReducer = combineReducers({
    componentReducer:componentReducer
})

export default rootReducer