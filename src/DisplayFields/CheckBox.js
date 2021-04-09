import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeData} from '../redux/componentActions'

import { Checkbox, Button, Modal, Form, Input } from 'antd';
import {PlusCircleFilled,MinusCircleFilled } from '@ant-design/icons';


const opacity = {
  cursor:"move"
}

const CheckBox = ({type,label,placeholder,helpertext,options,id}) => {


  const dispatch=useDispatch()

  //console.log("check options",options)


      const [open,setOpen] = useState(false);


      // const [content,setContent] = useState({
      //   label:"CheckBox",
      //   helpertext:"helpertext",
      // })
      const [fieldlabel,setFieldlabel]=useState(label)
      const [fieldplaceholder,setFieldplaceholder]=useState(placeholder)
      const [fieldhelpertext,setFieldhelpertext]=useState(helpertext)
      const [optionarray,setOptionarray]=useState(options)

      //console.log(fieldlabel,fieldplaceholder,fieldhelpertext)
      //console.log(optionarray)

      // const [options,setoptions]=useState([""])

      const handleChangelabel= (e)=>{    //for label
         const {name,value}=e.target

         setFieldlabel(value)
        // //console.log(name,value)
        // setContent({
        //     ...content,
        //     [name]:value
        // })
    }

    const handleChangehelpertext= (e)=>{    //for helpertext
      const {name,value}=e.target
      setFieldhelpertext(value)
 }

    const handleChangeoptions= (index,e) =>{  //for options
      //console.log(e.target.value,index)
      let curr=[...optionarray]
    //   let current={...state}
    //   console.log("curr[index]",curr[index])
    //   console.log("current",current)
    //   delete current.curr[index]
    //   setState(current)


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

      // const x=document.getElementById("name")
      // console.log('x is',x.value)
      setOpen(false);

      const data={
        id:id,
        type:type,
        label:fieldlabel,
        placeholder:fieldplaceholder,
        helpertext:fieldhelpertext,
        options:optionarray
      }

      //console.log(data)

      dispatch(changeData(data))

      };

      const handleReset = () =>{

        
        setFieldlabel(type)
        setFieldhelpertext('helpertext')
        setOptionarray([])

        const data={
          id:id,
          type:type,
          label:fieldlabel,
          placeholder:fieldplaceholder,
          helpertext:fieldhelpertext,
          options:optionarray
        }
  
        //console.log(data)

  
        //dispatch(changeData(data))


    
        //setContent(initialcontent)
        //setoptions(initialoptions)
        //clearState()
      }

      const handleRemoveFields = (index) => {
        const values = [...optionarray]
        values.splice(index,1);
        setOptionarray(values)
    }
      

  const handleAddFields = () => {
        //let curr={}
        //setState(curr)
      setOptionarray([...optionarray,{value:""}])
  }

  // const [state, setState] = React.useState({});

  

  // const clearState = () => {
  //     handleClickOpen();
  //     let current={}
  //     setState(current);
  // }

    return(
        <div style={{...opacity}}>
            {/* {console.log("state",state)} */}
            {/* <FormControl style={{float:"left"}} required> */}
            {/* <FormLabel>{label}</FormLabel> */}
            <Form style={{float:"left"}}
              labelCol={{ span:100 }}
              wrapperCol={{ span: 100 }}
              layout="horizontal"
            >
              <Form.Item>
              <label style={{fontSize:'16px',float:"left"}}>{label}</label>
              <br />
            <Checkbox.Group defaultValue={[]}>
            {options.map((x,index)=>{
              return(
                  <div>
                  <Checkbox style={{float:"left"}}>{x.value}</Checkbox>
                  <br />
                  </div>
              )
            })}
            </Checkbox.Group>
            <br />
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


        {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Customize</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Configure CheckBox
          </DialogContentText> */}
          <Modal visible={open}
          onOk={handleClickOpen}
          onCancel={handleCancel}
          footer={[<Button onClick={handleReset} type="danger">
          Reset
        </Button>,
        <Button onClick={handleClose} type="primary">
          Done
        </Button>]}>

          <h1>Configure CheckBox</h1>
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
        {/* </DialogContent>
        <DialogActions>
          <Button onClick={handleReset} type="danger">
            Reset
          </Button>
          <Button onClick={handleClose} type="primary">
            Done
          </Button>
        </DialogActions>
        </Dialog> */}
        {/* </FormControl> */}
        </Form>
        </div>
    )
}

export default CheckBox


// const handleChangeChecked = (event) => {           //stores state whether checked  or not of options
  //     //handleChangeoptions(event);
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };