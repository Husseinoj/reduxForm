import React from 'react'
import { Field, reduxForm,SubmissionError } from 'redux-form'
import showResult from './showResult';
const mySubmit=({firstName='',lastName='',email=''})=>{
  let error={};
  let isError=false;

  if (firstName.trim()===''){
    error.firstName='Required';
    isError=true;
  }
  if(firstName.length>20){
      error.firstName="to much char"
      isError=true;
  }
  if (lastName.trim()===''){
    error.lastName='Required';
    isError=true;
  }
  if (email.trim()===''){
    error.email='Required';
    isError=true;
  }
  if( isError){
      throw new SubmissionError(error);
  }else{
    console.log("valid Submission")
  }
};
/*...input in renderField input part just pass information to redux form or exactly to say redux store */
const renderField=({label,type, input, meta: { touched, error} }) => (   
    <div className="input-row">
        <label>{label}</label>
        <input {...input} type={type} />
        {touched && error &&
           <span className="error">{error}</span>
        }
    </div>
);
 const handleform= ({ handleSubmit, submitting }) => (
    <form onSubmit={handleSubmit(showResult)}>
        <Field name="firstName" label="First Name" component={renderField} type="text" />
        <Field name="lastName"  label="Last Name" component={renderField} type="text" />
        <Field name="email"  label="Email" component={renderField} type="email" />
        <button type="submit" disabled={submitting}>Submit</button>
    </form>
);
    //redux form decorate contactForm and add bunch of method and property to it

const ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(handleform)

export default ContactForm