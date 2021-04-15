import React, {useState,useEffect} from 'react'
import Box from './Box'
import Itemtype from './Itemtype'
import DropArea from './DropArea'
import {useSelector} from 'react-redux'
import DisplayCheckBox from './DisplayComponents/DisplayCheckBox'
import DisplayRadioButton from './DisplayComponents/DisplayRadioButton'
import {changePosition, entirelocalData, localData, selectForm, updateFormData} from './redux/componentActions'
import {useDispatch} from 'react-redux'
import DisplayDropDown from './DisplayComponents/DisplayDropDown';
import DisplayLineBreak from './DisplayComponents/DisplayLineBreak';
import DisplayHorizontalLine from './DisplayComponents/DisplayHorizontalLine';
import {SortableContainer} from 'react-sortable-hoc';
import './Container.css'
import {useParams} from 'react-router-dom'


import 'antd/dist/antd.css';
import { Layout, Modal, Form } from 'antd';
import { Button} from 'antd';
import { FolderViewOutlined, SaveOutlined } from '@ant-design/icons';
import DisplayDate from './DisplayComponents/DisplayDate'
import DisplayTime from './DisplayComponents/DisplayTime'
import DisplayUploadField from './DisplayComponents/DisplayUploadField'
import DisplayMessageInput from './DisplayComponents/DisplayMessageInput'
import DisplayInputField from './DisplayComponents/DisplayInputField'


const { Header, Sider, Content } = Layout;

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

const dropContainerStyle = {
    width: "200px",
    height:"100%"
};

const style ={
    display:"flex"
}


const SortableList = SortableContainer(DropArea);


const Container = ()=>{
  const {key}=useParams();
  //console.log('params container',key)


  const storedata=useSelector(state => state.componentReducer.selectedformdata.data)
  const temp=useSelector(state => state.componentReducer.data)
  
  console.log('localdata is',storedata)

  //const data=localdata.data

  const dispatch= useDispatch()

  // useEffect(()=>{
  //   const strx=window.localStorage.getItem('selectedformdata')
  //   //console.log('strx is',strx)
  //   if(strx!==null)
  //   {
  //     const x=JSON.parse(strx)
  //     //console.log("sunna x  is this",x)
  //     dispatch(localData(x))
  //     //console.log('x is',x.data)

  //     //console.log('hey')
  //   }
  //   //const x=JSON.parse(str)
  // },[])



  // useEffect(()=>{

  //   console.log('arreeee baaapre')
  //   const strx=window.localStorage.getItem('currkey')
  //   console.log('strx is',strx)
  //   if(strx!==null)
  //   {
  //     const x=JSON.parse(strx)
  //     //console.log("sunna x  is this",x)
  //     dispatch(selectForm(x))
  //     //console.log('x is',x.data)

  //     //console.log('hey')
  //   }
  //   //const x=JSON.parse(str)
  // },[])


    const [boxes] = useState([
        { name: "DropDown", type: Itemtype.card, id: "1" },
        { name: "CheckBox", type: Itemtype.card, id: "2" },
        { name: "RadioButton", type: Itemtype.card, id: "3" },
        { name: "LineBreak", type: Itemtype.card, id: "4" },
        { name: "HorizontalLine", type: Itemtype.card, id: "5" },
        { name: "DatePicker", type: Itemtype.card, id: "6" },
        { name: "TimePicker", type: Itemtype.card, id: "7" },
        { name: "UploadFile", type: Itemtype.card, id: "8" },
        { name: "MessageInput", type: Itemtype.card, id: "9" },
        { name: "Input", type: Itemtype.card, id: "9" }
      ]);


      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleSave=()=>{

        const tempobj={
          id:key,
          data:storedata
        }
        dispatch(updateFormData(tempobj))
      
        const obj={
          id:key
        }

        const str=JSON.stringify(temp)
        window.localStorage.removeItem('entiredata')
        window.localStorage.setItem('entiredata',str)
        // const str=JSON.stringify(obj)
        // window.localStorage.setItem('currkey',str)

        // const str=JSON.stringify(storedata)
        // //console.log("string",str)
        // window.localStorage.setItem('selectedformdata',str)

        //console.log("hooho",localdata)
        //const x=JSON.parse(str)
        //console.log('x is',x)
        //console.log('arr is',x.data)
        //console.log(typeof(str))
        //json.stringify(data)
        //window.localstorage
        // console.log(data)
        // var store=require('store')
        // store.set('data',data)
      }


      const onSortEnd = ({oldIndex,newIndex}) =>{
        const objx={
          oldIdx:oldIndex,
          newIdx:newIndex
        }

        dispatch(changePosition(objx))
      }

      
      return(
        // <div style={{...style}} >
        <div>
          <Layout>
                  <div>
                    <Sider style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0
                          }}>
                    <br />
                    <br />

                      {boxes.map(({ name, type, id }, index) => (
                        <Box
                          name={name}
                          type={type}
                          id={id}
                          key={id}
                        />
                      ))}
                    </Sider >
                  </div>

                  <Layout style={{marginLeft:200}}>
                    <Header style={{ position: 'fixed', zIndex: 1000, width: '100%' }}>
                      <Button type="primary" icon={<SaveOutlined />} size='large' onClick={handleSave}>
                        Save
                      </Button>
                      <Button type="secondary" icon={<FolderViewOutlined />} size='large' onClick={handleClickOpen}>
                        Preview
                      </Button>

                      <Modal visible={open}
                        onOk={handleClose}
                        onCancel={handleClose}
                        //style={{width:"100%", height:"100%"}}
                        >
                      
                      <h1>Your Form</h1>
                      {/* <Form style={{float:"left"}}
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"
                      > */}
                      {storedata.map((x,index)=>{
                            //console.log("good",index,x)
                            switch(x.type){
                              case "CheckBox":{
                                return (
                                  <div>
                                    <Form.Item>
                                  <DisplayCheckBox content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "RadioButton":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayRadioButton content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "DropDown":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayDropDown content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "LineBreak":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayLineBreak content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "HorizontalLine":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayHorizontalLine content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "DatePicker":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayDate content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "TimePicker":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayTime content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "UploadFile":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayUploadField content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "MessageInput":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayMessageInput content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              case "Input":{
                                return (
                                  <div>
                                  <Form.Item>
                                  <DisplayInputField content={x} />
                                  <br />
                                  </Form.Item>
                                  </div>)
                              }
                              default: return (
                                <div>
                                  <Form.Item>
                                {x.type}
                                <br />
                                </Form.Item>
                                </div>)
                            }
                          })}

                      </Modal>
                    </Header>
                    <Content style={{marginTop:64, overflow: 'initial', minHeight:'91.5vh'}}>
                    <SortableList onSortEnd={onSortEnd} distance={1} useWindowAsScrollContainer={true} transitionDuration={500}
                    pressThreshold={100} />
                    {/* <DropArea /> */}
                    </Content>
                  </Layout>
          </Layout>
      </div>
      )
}
export default Container


{/* <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar style={{position:"relative"}}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{marginLeft: "theme.spacing(2)",flex: 1}} >
              Your Form
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <List style={{width:"100%"}}>
          <h2>Hey</h2>
          {storedata.map((x,index)=>{
            //console.log("good",index,x)
            switch(x.type){
              case "CheckBox":{
                return (
                  <div>
                    <ListItem>
                  <DisplayCheckBox content={x} />
                  <br />
                  </ListItem>
                  </div>)
              }
              case "RadioButton":{
                return (
                  <div>
                  <ListItem>
                  <DisplayRadioButton content={x} />
                  <br />
                  </ListItem>
                  </div>)
              }
              case "DropDown":{
                return (
                  <div>
                  <ListItem>
                  <DisplayDropDown content={x} />
                  <br />
                  </ListItem>
                  </div>)
              }
              case "LineBreak":{
                return (
                  <div>
                  <ListItem>
                  <DisplayLineBreak content={x} />
                  <br />
                  </ListItem>
                  </div>)
              }
              case "HorizontalLine":{
                return (
                  <div>
                  <ListItem>
                  <DisplayHorizontalLine content={x} />
                  <br />
                  </ListItem>
                  </div>)
              }
              default: return (
                <div>
                  <ListItem>
                {x.type}
                <br />
                </ListItem>
                </div>)
            }
          })}
          {/* </Grid> */}
        {/* </List>

      </Dialog> */}