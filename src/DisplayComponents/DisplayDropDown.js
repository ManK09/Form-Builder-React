import React from 'react'
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';

import { Menu,Dropdown, Form,Button } from 'antd';
import {DownOutlined } from '@ant-design/icons';

const DisplayDropDown= ({content})=>{

  const menu = ()=>{
    return(
      <Menu>
    { content.options.map((x,index) =>{
      return(
      <Menu.Item style={{float:"left"}}>{x.value}</Menu.Item>
      )
    })}
    </Menu>
    )
  }
   // console.log('content is',content)

    return(
      <div>
        <Form style={{float:"left"}}
              labelCol={{ span:100,offset: 14 }}
              wrapperCol={{ span: 100, offset:2 }}
              layout="horizontal"
            >
              <Form.Item>
              <label style={{fontSize:'16px'}}>{content.label}</label>
              {/* <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel> */}
              <Dropdown overlay={menu}>
                <Button>{content.placeholder}<DownOutlined /></Button>
              </Dropdown>
              <br />
              <br />
              {content.helpertext}
        </Form.Item>
        </Form>
      </div>
        // <div style={{width:"40%"}}>
        // {/* <h1>1</h1> */}
        // <FormControl required>
        //     <FormLabel>{content.label}</FormLabel>
        //     <InputLabel>{content.placeholder}</InputLabel>
        // <Select defaultValue="">
        //   {
        //   content.options.map((x,index) =>{
        //     // console.log("field",index,x);
        //     return(
        //     <MenuItem>{x.value}</MenuItem>
        //     )
        //   })
        //   }
        // </Select>
        // <FormHelperText>{content.helpertext}</FormHelperText>
        // </FormControl>
        // </div>
    )

}

export default DisplayDropDown