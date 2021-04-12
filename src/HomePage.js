import React,{useState} from 'react'

import 'antd/dist/antd.css';
import { List, Modal,Form,Input, Divider,Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import {PlusCircleFilled,MinusCircleFilled } from '@ant-design/icons';
import { nanoid } from 'nanoid'
import { addNewForm, changeName, deleteForm } from './redux/componentActions';

import {Link} from 'react-router-dom'

const style={
    marginLeft:'100px'
}
const opacity={
    cursor:"pointer"
}

export default function HomePage() {


    const dispatch=useDispatch()

    const data = useSelector(state  => state.componentReducer.data)

    const handleClick=()=>{
        //console.log('eeyaa')
        const key=nanoid()
        const obj={
            key:key,
            name:`newForm${key}`,
            data:[]
        }
        dispatch(addNewForm(obj))
    }
    const handlehatao=(index)=>{
        console.log("hihaa",index)
        const obj={
            id:index
        }
        dispatch(deleteForm(obj))
    }

    const [open,setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };

      const handleCancel = ()=>{
        setOpen(false);
      }
    
      const handleClose = (index) => {
          const obj={
              id:index,
              name:fieldlabel
          }
          dispatch(changeName(obj))
        //setOpen(false);
      };

      const [fieldlabel,setFieldlabel]=useState('')

      const handleChangelabel= (e)=>{    //for label
        const {name,value}=e.target

        setFieldlabel(value)
   }
    return (
        <div style={{...style}}>
            <Divider orientation="left"><h1>Your Forms</h1></Divider>

            <Button onClick={handleClick}
                icon={<PlusCircleFilled />} size='large' type="primary"
            >Add New Option</Button>
                <List style={{...opacity}}
                itemLayout="horizontal"
                size="large"
                //header={<div>Header</div>}   //ask a  question why ()=>{handlehato(index)} worked but not directly {handlehatoa(index)}
                //footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item,index) => <List.Item key={item.id}
                    actions={[
                            <Button size='small' type='secondary'
                            style={{background:'#4CAF50', borderColor:'#4CAF50', color:'white', float:'left'}}
                            onClick={handleClickOpen}
                            >
                                Change Name
                            </Button>,
                            <Button size='small' type='secondary'
                            style={{background:'#f50057', borderColor:'#f50057', color:'white', float:'left'}}
                            onClick={()=>{handlehatao(index)}}
                            >
                                Delete
                            </Button>,
                            <Modal visible={open}
                                onOk={handleClickOpen}
                                onCancel={handleCancel}
                                footer={[
                                <Button onClick={handleCancel} type="primary">
                                    Done
                                </Button>]}>
                                <Form.Item label="Label">
                                    <Input value={fieldlabel} placeholder='type new name'
                                        onChange={handleChangelabel} style={{width:"250px"}}/>
                                     <Button onClick={()=>handleClose(index)} type="primary" 
                                     style={{background:'#4CAF50', borderColor:'#4CAF50', color:'white'}}>
                                    Save
                                    </Button>
                                </Form.Item>
                            </Modal>
                    ]}
                  >
                    <Link to='/:id'>{item.name}</Link>
                    </List.Item>}
                />
        </div>
    )
}