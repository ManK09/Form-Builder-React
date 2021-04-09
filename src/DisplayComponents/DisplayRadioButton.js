import React from 'react'
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';
// //import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';

import { Radio, Form } from 'antd';

const DisplayRadioButton= ({content})=>{
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

            <Radio.Group value={['']}>
            {content.options.map((x,index) =>{
            
            return(
                <div>
                <Radio>{x.value}</Radio>
                <br />
                </div>
            )
            })}
            </Radio.Group>
            <br />
            <br />
            {content.helpertext}
            </Form.Item>
            </Form>
        {/* <h1>1</h1> */}
        {/* <FormControl style={{float:"left"}} required>
            <FormLabel>{content.label}</FormLabel>
            <RadioGroup>
            {content.options.map((x,index) =>{
            
            return(
                <FormControlLabel value={x.value} control={<Radio />} label={x.value} />
            )
            })}
            </RadioGroup>
            <FormHelperText>{content.helpertext}</FormHelperText>
        </FormControl> */}
        </div>
    )

}

export default DisplayRadioButton