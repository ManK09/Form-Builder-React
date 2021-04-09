import React,{useState} from 'react'
import { Input, Form, Button, Modal} from 'antd';
import {useDispatch} from 'react-redux'
import {changeData} from '../redux/componentActions'

const { TextArea } = Input;

const opacity = {
    cursor:"move",
    float:"left",
    width:"100%"
  }

const InputField=({type,label,placeholder,helpertext,options,id})=>{

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

    const handleChangeplaceholder= (e)=>{    //for placeholder
        const {name,value}=e.target
    
        setFieldplaceholder(value)
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
          setFieldplaceholder('placeholder')
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

    return(
        <div style={{...opacity}}>
             <Form>
                <Form.Item>
                    <label style={{fontSize:'16px',float:"left"}}>{label}</label>
                    <br />
                    <Input style={{backgroundColor:"#5d8d97"}} placeholder={placeholder}/>
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
             <Form.Item label="PlaceHolder">
            <Input value={fieldplaceholder}
            onChange={handleChangeplaceholder}
            style={{width:"250px"}}
             />
             </Form.Item>
          
                </Modal>
            </Form>
        </div>
    )
}
export default InputField




