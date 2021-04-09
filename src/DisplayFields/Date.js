import React,{useState} from 'react'
import { DatePicker, Form, Button, Modal,Input} from 'antd';
import {useDispatch} from 'react-redux'
import {changeData} from '../redux/componentActions'

const opacity = {
    cursor:"move",
    float:"left"
  }

const Date = ({type,label,placeholder,helpertext,options,id}) =>{

    const dispatch=useDispatch()

    const [open,setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleCancel = () => {
        setOpen(false);
      };

      const [fieldlabel,setFieldlabel]=useState(label)
      const [fieldplaceholder,setFieldplaceholder]=useState(placeholder)
      const [fieldhelpertext,setFieldhelpertext]=useState(helpertext)
      const [optionarray,setOptionarray]=useState(options)


      const handleChangelabel= (e)=>{    //for label
        const {name,value}=e.target
 
        setFieldlabel(value)
        }
 
   const handleChangehelpertext= (e)=>{    //for helpertext
     const {name,value}=e.target
     setFieldhelpertext(value)
    }

    const handleClose = () => {

        setOpen(false);
    
        const data={
          type:type,
          id:id,
          label:fieldlabel,
          placeholder:fieldplaceholder,
          helpertext:fieldhelpertext,
          options:optionarray
        }
    
    
        dispatch(changeData(data))
    
        };
    
        const handleReset = () =>{
    
          
          setFieldlabel(type)
          setFieldhelpertext('helpertext')
          setOptionarray([])
    
          const data={
            type:type,
            id:id,
            label:fieldlabel,
            placeholder:fieldplaceholder,
            helpertext:fieldhelpertext,
            options:optionarray
          }
    
        }

    //console.log("AAAHHello")
    return(
        <div style={{...opacity}}>
            <Form style={{float:"left"}}
              labelCol={{ span:100 }}
              wrapperCol={{ span: 100 }}
              layout="horizontal"
            >
                <Form.Item>
                    <label style={{fontSize:'16px',float:"left"}}>{label}</label>
                    <br />
                    <DatePicker style={{backgroundColor:"#5d8d97"}}/>
                    <br />
                    <div style={{float:'left'}}>
                    {helpertext}
                    </div>
                </Form.Item>

            <Button size='default' 
            style={{background:'#f50057', borderColor:'#f50057', color:'white', float:'left'}}
            //onClick={clearState}
            onClick={handleClickOpen}>Edit
            </Button>

            <Modal visible={open}
            onOk={handleClickOpen}
            onCancel={handleCancel}
            footer={[<Button onClick={handleReset} type="danger">
                        Reset
                    </Button>,
                    <Button onClick={handleClose} type="primary">
                    Done
                    </Button>]}>

          <h1>Configure DatePicker</h1>
          <Form.Item label="Label">
          <Input value={fieldlabel}
            onChange={handleChangelabel} style={{width:"250px"}}/>
            </Form.Item>
            <Form.Item label="Helpertext">
            <Input value={fieldhelpertext}
            onChange={handleChangehelpertext}
            style={{width:"250px"}}
             />
             </Form.Item>
          
                </Modal>
            </Form>
        </div>
    )
}

export default Date