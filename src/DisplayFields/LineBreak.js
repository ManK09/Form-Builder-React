import React,{useEffect} from "react"
import { saveData } from "../redux/componentActions"
import {useDispatch} from 'react-redux'
import {useDrag} from 'react-dnd'
import Itemtype from '../Itemtype'


const opacity = {
  cursor:"move"
}

const LineBreak = () =>{


    // const dispatch=useDispatch()

    // const data={
    //     id:id,
    //     type:type,
    //     label:label,
    //     placeholder:placeholder,
    //     helpertext:helpertext,
    //     options:options
    //   }

    //   console.log(data)
    // useEffect(()=>{
    //     dispatch(saveData(data))
    // },[])
    

    return(
        <div style={{...opacity}}>
        <br />
        </div>
    )
}

export default LineBreak