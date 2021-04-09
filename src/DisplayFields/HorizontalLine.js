import React,{useEffect} from "react"
import {useDispatch} from 'react-redux'
import { saveData } from "../redux/componentActions"
import {useDrag} from 'react-dnd'
import Itemtype from '../Itemtype'


const opacity = {
  cursor:"move"
}

const HorizontalLine = ({type,label,placeholder,helpertext,options,id}) =>{

    // const dispatch=useDispatch()

    // const data={
    //     label:'HorizontalLine'
    // }

    // useEffect(()=>{
    //     dispatch(saveData(data))
    // },[])
   

    return(
        <div style={{...opacity}}>
        <hr style={{width:"70%",float:"left"}}/>
        </div>
    )
}

export default HorizontalLine