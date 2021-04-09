import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteData} from './redux/componentActions'
import Card from './Card'
import { Button } from 'antd';
import {SortableElement} from 'react-sortable-hoc';
import {DeleteOutlined} from '@ant-design/icons';


const SortableItem = SortableElement(Card)

const style={
    display:"flex"
}

const Display = () =>{

    const dispatch=useDispatch()
    const data = useSelector(state  => state.componentReducer.selectedformdata)

    const handleRemove = (index) =>{
        const data={
            id:index
        }
        dispatch(deleteData(data))
        // const values=[...content]
        // values.splice(index,1)
        // setContent(values)
    }

    //.sort((a,b)=>a.position - b.position)

    return(
        data.map((item,index)=>{
            // {console.log('index is',index)}
            // {console.log('item is',item)}
            return(
                <div style={{...style}}>
                    <SortableItem item={item} index={index} key={item.id}/>
                    {/* <SortableItem item={item} index={index}/> */}
                    <br />
                     <br />
                    {<Button type="primary" icon={<DeleteOutlined />} size='large'
                    onClick={()=>{handleRemove(index)}}>
                    Delete
                    </Button>}
                </div>
            )
        })
    )
}

export default Display