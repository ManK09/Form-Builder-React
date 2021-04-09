import React from 'react'
import { DatePicker,Form} from 'antd';

const DisplayDate=({content})=>{
    return(
        <div>
        <Form style={{float:"left"}}
              labelCol={{ span:100 }}
              wrapperCol={{ span: 100 }}
              layout="horizontal"
            >
                <Form.Item>
                    <label style={{fontSize:'16px',float:"left"}}>{content.label}</label>
                    <br />
                    <DatePicker />
                    <br />
                    <div style={{float:'left'}}>
                    {content.helpertext}
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
export default DisplayDate