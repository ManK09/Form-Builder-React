import React,{useState,useEffect} from 'react'

import 'antd/dist/antd.css';
import { List, Modal,Form,Input, Divider,Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import {PlusCircleFilled, SaveOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid'
import { addNewForm, changeName, deleteForm, entirelocalData } from './redux/componentActions';

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

    useEffect(()=>{
        const strx=window.localStorage.getItem('entiredata')
        console.log('strx hello is',strx)
        if(strx!==null)
        {
          const x=JSON.parse(strx)
          //console.log("sunna x  is this",x)
          dispatch(entirelocalData(x))
          //console.log('x is',x.data)
    
          //console.log('hey')
        }
        //const x=JSON.parse(str)
      },[])

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

    const handleDelete=(index)=>{
        //console.log("hihaa",index)
        const obj={
            id:index
        }
        dispatch(deleteForm(obj))
    }

    const [open,setOpen] = useState(false);

    const [x,setX]=useState(0)

    const handleClickOpen = (index) => {
        setX(index)
        setOpen(true);
      };

      const handleCancel = ()=>{
        setOpen(false);
      }
    
      const handleClose = (index) => {
          console.log('index ji',index)
          const obj={
              id:index,
              name:fieldlabel
          }
          dispatch(changeName(obj))
        setOpen(false);
      };

      const [fieldlabel,setFieldlabel]=useState('')

      const handleChangelabel= (e)=>{    //for label
        const {name,value}=e.target

        setFieldlabel(value)
   }

   const handleSaveForm=()=>{
    const str=JSON.stringify(data)
    //console.log("string",str)
    window.localStorage.setItem('entiredata',str)  
   }
   

    return (
        <div style={{...style}}>
            <Divider orientation="left"><h1>Your Forms</h1></Divider>

            <Button onClick={handleClick}
                icon={<PlusCircleFilled />} size='large' type="primary"
            >Add New Option</Button>
            <Button onClick={handleSaveForm}
                icon={<SaveOutlined />} size='large' type="secondary"
                style={{background:'#f50057', borderColor:'#f50057', color:'white'}}
            >Save Forms</Button>

                <List style={{...opacity}}
                itemLayout="horizontal"
                size="large"
                //header={<div>Header</div>}   //ask a question why ()=>{handlehato(index)} worked but not directly {handlehatoa(index)}
                //footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item,index) => <List.Item key={item.id}
                    actions={[
                            <Button size='small' type='secondary'
                            style={{background:'#4CAF50', borderColor:'#4CAF50', color:'white', float:'left'}}
                            onClick={()=>handleClickOpen(index)}
                            >
                                Change Name
                            </Button>,
                            <Button size='small' type='secondary'
                            style={{background:'#f50057', borderColor:'#f50057', color:'white', float:'left'}}
                            onClick={()=>{handleDelete(index)}}
                            >
                                Delete
                            </Button>,
                            <Modal visible={open}
                                onOk={handleCancel}
                                onCancel={handleCancel}
                                // footer={[
                                // <Button onClick={handleCancel} type="primary">
                                //     Done
                                // </Button>]}
                                >
                                <Form.Item label="Label">
                                    <Input value={fieldlabel} placeholder='type new name'
                                        onChange={handleChangelabel} style={{width:"250px"}}/>
                                     <Button onClick={()=>handleClose(x)} type="primary" 
                                     style={{background:'#4CAF50', borderColor:'#4CAF50', color:'white'}}>
                                    Save
                                    </Button>
                                </Form.Item>
                            </Modal>
                    ]}
                  >
                      {/* {console.log(item.key)} */}
                    <Link to={`/${item.key}`}>{item.name}</Link>
                    </List.Item>}
                />
        </div>
    )
}