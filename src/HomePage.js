import React from 'react'

import 'antd/dist/antd.css';
import { List, Typography, Divider,Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import {PlusCircleFilled,MinusCircleFilled } from '@ant-design/icons';
import { nanoid } from 'nanoid'
import { addNewForm } from './redux/componentActions';

const style={
    marginLeft:'100px'
}

export default function HomePage() {


    const dispatch=useDispatch()

    const data = useSelector(state  => state.componentReducer.data)

    const handleClick=()=>{
        const obj={
            key:nanoid(),
            name:'newForm',
            data:[]
        }
        dispatch(addNewForm(obj))
    }
    return (
        <div style={{...style}}>
            <Divider orientation="left"><h1>Your Forms</h1></Divider>

            <Button onClick={handleClick}
                icon={<PlusCircleFilled />} size='large' type="primary"
            >Add New Option</Button>
                <List
                size="large"
                //header={<div>Header</div>}
                //footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={item => <List.Item>{item.name}</List.Item>}
                />
        </div>
    )
}