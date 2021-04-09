import {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST} from './listTypes'

const initialState = {
    loading: true,
    videos: [],
    error: ''
}

const listReducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:{
            return{
                ...state,
                loading:true
            }
        }
        case FETCH_USERS_SUCCESS:{
            return{
                ...state,
                videos:action.payload,
                error:''
            }
        }
        case FETCH_USERS_FAILURE:{
            return{
                ...state,
                videos:[],
                error:action.payload
            }
        }
        default: return state
    }
}

export default listReducer