import { Input,Form } from 'antd';

const { TextArea } = Input;

const DisplayMessageInput=({content})=>{
    return(
        <div>
            <Form>
                <Form.Item>
                    <label style={{fontSize:'16px',float:"left"}}>{content.label}</label>
                    <br />
                    <TextArea rows={4} placeholder={content.placeholder}/>
                    <br />
                    <div style={{float:'left'}}>
                    {content.helpertext}
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
export default DisplayMessageInput


