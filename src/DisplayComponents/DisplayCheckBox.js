import React from 'react'


import { Checkbox,Form } from 'antd';

const DisplayCheckBox = ({content})=>{
    //console.log('content is',content)

    return(
        <div>
            <Form style={{float:"left"}}
              labelCol={{ span:100,offset: 14 }}
              wrapperCol={{ span: 100, offset:2 }}
              layout="horizontal"
            >
              <Form.Item>
              <label style={{fontSize:'16px'}}>{content.label}</label>
            <Checkbox.Group defaultValue={[]}>
            {content.options.map((x,index)=>{
              return(
                  <div>
                  <Checkbox>{x.value}</Checkbox>
                  <br />
                  </div>
              )
            })}
            </Checkbox.Group>
            <br />
            <br />
            {content.helpertext}
            </Form.Item>
            </Form>

        {/* <h1>1</h1> */}
        {/* <FormControl style={{float:"left"}} required>
            <FormLabel>{content.label}</FormLabel>
            <FormGroup>
            {content.options.map((x,index) =>{
            
            return(
                <div>
                <FormControlLabel
                control={<Checkbox name={x.value} />}
                label={x.value}
              />
              {/* {console.log(x,state.x)} */}
                {/* </div>
            )
            })}
            </FormGroup>
            <FormHelperText>{content.helpertext}</FormHelperText>
        </FormControl> */}
        </div>
    )

}

export default DisplayCheckBox