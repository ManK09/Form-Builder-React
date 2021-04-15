import React,{useEffect} from 'react'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Container from './Container'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { clearSelectedForm, entirelocalData, selectForm } from './redux/componentActions';

export default function CallingPage() {

    console.log('Ojjjjbhbh')

    const dispatch=useDispatch()

    const {key}=useParams();
    

    useEffect(()=>{
        //console.log('un',key)

        //console.log('hiiii')

        // const strx=window.localStorage.getItem('entiredata')
        // console.log('strx hello is',strx)
        // if(strx!==null)
        // {
        //   const x=JSON.parse(strx)
        //   //console.log("sunna x  is this",x)
        //   dispatch(entirelocalData(x))
        //   //console.log('x is',x.data)
    
        //   //console.log('hey')
        // }
        return () =>{
            dispatch(clearSelectedForm())
            //window.localStorage.removeItem('currkey')
        }
    },[])

    const strx=window.localStorage.getItem('entiredata')
        console.log('strx hello is',strx)
        if(strx!==null)
        {
          const x=JSON.parse(strx)
          //console.log("sunna x  is this",x)
          dispatch(entirelocalData(x))
        }


    const obj={
        id:key
    }
    dispatch(selectForm(obj))
    
    //console.log('paramas',key)

    return (
        <div>
            <DndProvider backend={ HTML5Backend } >
                <Container/>
            </DndProvider>
        </div>
    )
}