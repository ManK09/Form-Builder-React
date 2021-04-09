import React from 'react'
import { Upload, message, Button,Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const DisplayUploadField=({content})=>{
  const props = {
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };
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
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                    <div style={{float:'left'}}>
                    {content.helpertext}
                    </div>
                </Form.Item>
            </Form>
        </div>
      )

}
export default DisplayUploadField


