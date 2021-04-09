import { Input,Form } from 'antd';

const { TextArea } = Input;

const DisplayInputField=({content})=>{
    return(
        <div>
            <Form>
                <Form.Item>
                    <label style={{fontSize:'16px',float:"left"}}>{content.label}</label>
                    <br />
                    <Input placeholder={content.placeholder}/>
                    <br />
                    <div style={{float:'left'}}>
                    {content.helpertext}
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
export default DisplayInputField