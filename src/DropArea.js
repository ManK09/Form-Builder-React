import React from "react";
import { useDrop } from 'react-dnd'
import Itemtype from './Itemtype'
import {useSelector,useDispatch} from 'react-redux'
import {saveData,deleteData} from './redux/componentActions'
import { nanoid } from 'nanoid'
import Display from './Display'
import {useParams} from 'react-router-dom'

const style = {
  display:"flex",
  flexDirection:"column",
  height: "100%",
  width: "100%",
  //marginRight: "1.5rem",
  //marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  //float: "left",
  backgroundColor:"#5d8d97",
  //position:"relative"
};

//const SortableItem = SortableElement(Card)

//const SortableItem = SortableElement(Display)

const DropArea = () => {


    const dispatch=useDispatch()


    const dropContainerStyle = {
        width: "200px"
    };


    //const [content,setContent]=useState([])

    const data = useSelector(state  => state.componentReducer.selectedformdata.data)

    //console.log(data)

    const dragHandler = (item) =>{

        //console.log("hiiihaaa",item)

        const initial={
            id:nanoid(),
            type:item.name,
            label:item.name,
            placeholder:"placeholder",
            helpertext:"helpertext",
            options:[]
          }
          dispatch(saveData(initial))

        //   setContent(
        //     [...content,item]
            
        //   )
      }

    const [{canDrop, isOver}, drop] = useDrop({
        accept:[Itemtype.card],
        drop: (item,monitor) => {
                dragHandler(item)
        },
        collect: (monitor) => ({
             isOver: monitor.isOver(),
             canDrop: monitor.canDrop(),
         }),
    });


    const handleRemove = (index) =>{
        const data={
            id:index
        }
        dispatch(deleteData(data))
        // const values=[...content]
        // values.splice(index,1)
        // setContent(values)
    }


    return(
        <div ref={drop} style={{...style}}>
           DropArea
           <br />
           <br />
           <Display />
           {/* <SortableItem /> */}
            {/* {display()} */}
        </div>
    )
}

export default DropArea

