import React, { useEffect,useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Radio,
} from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const FormFieldError = ({userName,changeOptions}) => {
  function handleChange(event){
    changeOptions({[event.target.name]:event.target.value});
  }
  return (
    <Form >
      <Form.Field
        id='form-input-control-full-name'
        control={Input}
        label='Full name'
        placeholder='Full name'
        value = {userName}
        readOnly
      />
      <Form.Field
        id='form-input-control-address'
        control={Input}
        label='Address'
        placeholder='Address'        
        name= "address"
        onChange = {(e)=>handleChange(e)}
      />
      <Form.Field
        id='form-input-control-phone-number'
        control={Input}
        label='Phone number'
        placeholder='Phone number'
        name = "phone"
        type="number"
        onChange = {(e)=>handleChange(e)}
      />
       
        <Form.Field>
          <Radio
            label='Pay By Cash'
            name='paymentMethod'
            value='cash'
            checked={true}
            onChange = {(e)=>handleChange(e)}
            
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Pay By Card'
            name='card'
            value='card'
            readOnly
          />
        </Form.Field>
  </Form>
  )
}

export default FormFieldError;
