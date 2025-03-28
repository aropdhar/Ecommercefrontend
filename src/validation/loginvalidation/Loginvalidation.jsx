import React from 'react'
import * as Yup from 'yup';

const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Loginvalidation = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .matches(emailregex , 'Please Match Email Regex Example@gmail.com')
      .required('Please Enter Your Email Address'),
    password: Yup.string()
      .min(8 , "Must be 8 Character or Less")
      .max(12, 'Must be 15 characters or less')
      .required('Please Enter Your Password'),
})

export default Loginvalidation
