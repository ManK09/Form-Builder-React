import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeData} from '../redux/componentActions'


import { Menu,Dropdown, Button, Modal, Form, Input } from 'antd';
import {PlusCircleFilled,MinusCircleFilled,DownOutlined } from '@ant-design/icons';


const opacity = {
  cursor:"move"
}

const DropDown = ({type,label,placeholder,helpertext,options,id}) => {

  const dispatch=useDispatch()


  const style = {
      borderStyle:"solid",
      //backgroundColor: "white",
      //padding: "0.5rem 0.1rem",
      marginRight: "1.5rem",
      marginBottom: "1.5rem",
      marginTop:"1rem",
      cursor: "move",
      float: "left",
      fontSize: "50%",
      fontColor:"purple",
      width:"250px"
    };

    const [open,setOpen] = useState(false);


    const [fieldlabel,setFieldlabel]=useState(label)
    const [fieldplaceholder,setFieldplaceholder]=useState(placeholder)
    const [fieldhelpertext,setFieldhelpertext]=useState(helpertext)
    const [optionarray,setOptionarray]=useState(options)


    const handleChangelabel= (e)=>{    //for label
       const {name,value}=e.target

       setFieldlabel(value)
  }

  const handleChangeplaceholder= (e)=>{    //for placeholder
    const {name,value}=e.target

    setFieldplaceholder(value)
}

  const handleChangehelpertext= (e)=>{    //for helpertext
    const {name,value}=e.target
    setFieldhelpertext(value)
}

  const handleChangeoptions= (index,e) =>{  //for options
    //console.log(e.target.value,index)
    let curr=[...optionarray]

    curr[index].value=e.target.value
    setOptionarray(curr)
  }

  let initialcontent={label:"Label",
  helpertext:"helpertext"}

  let initialoptions=[]

  const handleClickOpen = () => {
      setOpen(true);
    };

  const handleCancel = () => {
    setOpen(false);
  };
  
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

    const handleRemoveFields = (index) => {
      const values = [...optionarray]
      values.splice(index,1);
      setOptionarray(values)
  }
    

const handleAddFields = () => {

    setOptionarray([...optionarray,{value:""}])
}

const menu = ()=>{
  return(
    <Menu>
  { options.map((x,index) =>{
    return(
    <Menu.Item>{x.value}</Menu.Item>
    )
  })}
  </Menu>
  )
}

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
              {/* <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel> */}
              <Dropdown overlay={menu}>
                <Button style={{backgroundColor:"#5d8d97"}}>{placeholder}<DownOutlined /></Button>
              </Dropdown>
              <br />
              <br />
              <div style={{float:'left'}}>
              {helpertext}
              </div>
        </Form.Item>
        <Button size='default' 
        style={{background:'#f50057', borderColor:'#f50057', color:'white', float:'left'}}
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

          <h1>Configure RadioButton</h1>
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
          <label style={{fontFamily:"Roboto"}}><b>Options:</b></label>
          <br />
          <Button style={{background:'#4CAF50', borderColor:'#4CAF50', color:'white'}}
           icon={<PlusCircleFilled />} size='small' onClick={() => handleAddFields()}
           >Add New Option</Button>
           <br />
           <br />
          { optionarray.length===0 ? ''
          : 
          optionarray.map((x,index) =>{
            //console.log(x,index)
            return(
              <div>
            <Form.Item label={`Option ${index+1}`}>
            <Input
            value={optionarray[index].value}
            onChange={event => handleChangeoptions(index,event)}
            style={{width:"150px"}}
          />
          <span style={{marginLeft:'2em'}}>
          <Button style={{background:'#D32F2F', borderColor:'#D32F2F', color:'white'}} icon={<MinusCircleFilled />} size='small' onClick={() => handleRemoveFields(index)}>
            Remove
          </Button>
          {/* <Button  style={{background:'#4CAF50', borderColor:'#4CAF50', color:'white'}} icon={<PlusCircleFilled />} size='small' onClick={() => handleAddFields()}></Button> */}
          </span>
          </Form.Item>
          </div>
          )
          })}
          </Modal>
        </Form>
      {/* </FormControl> */}
      </div>
    )
}

export default DropDown