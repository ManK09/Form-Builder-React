import React from 'react'
import { TimePicker,Form} from 'antd';
import moment from 'moment';

const DisplayTime=({content})=>{
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
                    <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}/>
                    <br />
                    <div style={{float:'left'}}>
                    {content.helpertext}
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
export default DisplayTime

