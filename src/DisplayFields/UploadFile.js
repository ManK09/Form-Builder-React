import React,{useState} from 'react'
import { Upload, message, Button, Form,Input,Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {useDispatch} from 'react-redux'
import {changeData} from '../redux/componentActions'

const opacity = {
    cursor:"move",
    float:"left"
  }

const UploadFile = ({type,label,placeholder,helpertext,options,id}) =>{
  const props = {
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
      //console.log(info.type)
    },
  };

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

      return(
        <div style={{...opacity}}>
            <Form style={{textAlign:"left"}}
            labelCol={{ span:100 }}
            wrapperCol={{ span: 100 }}
            layout="horizontal"
            >
            <Form.Item>
                <label style={{fontSize:'16px',textAlign:"left"}}>{label}</label>
                <br />
                <Upload {...props}>
                    <Button icon={<UploadOutlined />} style={{backgroundColor:"#5d8d97"}}>Click to Upload</Button>
                </Upload>
                
                <div>
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
export default UploadFile

