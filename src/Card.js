import React from "react"
import DropDown from './DisplayFields/DropDown'
import CheckBox from './DisplayFields/CheckBox'
import LineBreak from './DisplayFields/LineBreak'
import RadioButton from './DisplayFields/RadioButton'
import HorizontalLine from './DisplayFields/HorizontalLine'
import Date from "./DisplayFields/Date"
import Time from "./DisplayFields/Time"
import UploadFile from "./DisplayFields/UploadFile"
import MessageInput from "./DisplayFields/MessageInput"
import InputField from "./DisplayFields/InputField"
const Card = ({item}) =>{

  // console.log('hello',item)
    const style = {
        width:"60%",
        borderStyle:"dashed",
        //display:"block",
        borderWidth:'1px',
        borderColor:'black',
        //backgroundColor: "white",
        padding: "0.5rem 1rem",
        marginRight: "1.5rem",
        marginBottom: "1.5rem",
        cursor: "move",
        //float: "left",
        fontSize: "50%",
        //fontColor:"purple",
        //position:"relative",
        //height:"200px",
        //minHeight:"150px"
      };
    

      if(item.type==="CheckBox")
      {
        return(
          <div style={{...style}}>
          <CheckBox type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id} />
          </div>
        )
      }
      else if(item.type==='RadioButton')
      {
        return(
          <div style={{...style}}>
          <RadioButton type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id} />
          </div>
        )
      }
      else if(item.type==="DropDown")
      {
        return(
          <div style={{...style}}>
          <DropDown type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id} />
          </div>
        )
      }
      else if(item.type==="LineBreak")
      {
        return(
          <div style={{...style}}>
          <LineBreak type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id} />
          </div>
        )
      }
      else if(item.type==="HorizontalLine")
      {
        return(
          <div style={{...style}}>
          <HorizontalLine type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id}/>
          </div>
        )
      }
      else if(item.type==="DatePicker")
      {
        return(
          <div style={{...style}}>
          <Date type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id}/>
          </div>
        )
      }
      else if(item.type==="TimePicker")
      {
        return(
          <div style={{...style}}>
          <Time type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id}/>
          </div>
        )
      }
      else if(item.type==="UploadFile")
      {
        return(
          <div style={{...style}}>
          <UploadFile type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id}/>
          </div>
        )
      }
      else if(item.type==="MessageInput")
      {
        return(
          <div style={{...style}}>
          <MessageInput type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id}/>
          </div>
        )
      }
      else if(item.type==="Input")
      {
        return(
          <div style={{...style}}>
          <InputField type={item.type} label={item.label} placeholder={item.placeholder} helpertext={item.helpertext} options={item.options} id={item.id}/>
          </div>
        )
      }
      return (
        <div style={{ ...style }}>
            <h1>{item.type}</h1>
        </div>
      );
}

export default Card