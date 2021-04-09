import axios from 'axios'
import {FETCH_USERS_FAILURE,FETCH_USERS_SUCCESS,FETCH_USERS_REQUEST} from './listTypes'

export const fetchVideoRequest= () =>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchVideoSuccess = videos =>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:videos
    }
}

export const fetchVideoFailure = error =>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchVideos = (searchQuery) =>{
    return (dispatch) =>{
        dispatch(fetchVideoRequest())
        axios.get("https://youtube.googleapis.com/youtube/v3/search?q=" +
        searchQuery +
        "&part=snippet" +
        "&key=AIzaSyDHoeogaijfkf0GSX4NEG7vFuBq_840foE")
        .then(response =>{
            const videos = response.data
            dispatch(fetchVideoSuccess(videos.items))
            dispatch(selectVideo(videos.items[0]))
        })
        .catch(error =>{
            const errorMsg = error.message
            dispatch(fetchVideoFailure(errorMsg))
        })
    }
}