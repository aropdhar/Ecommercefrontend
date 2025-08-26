import React from 'react'
import * as Yup from 'yup';

const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const Signupvalidation = Yup.object({
       Firstname: Yup.string()
         .min(4 , 'Minimum Character 4 or greater')
         .max(15, 'Must be 15 characters or less')
         .required('Please Enter Your Name'),
       Email_Address: Yup.string()
         .email('Invalid email address')
         .matches(emailregex , 'Please Match Email Regex Example@gmail.com')
         .required('Please Enter Your Email'),
       password: Yup.string()
         .min(8, 'Minimum 8 character password one uppercase letter, one lowercase letter and one number one Symbol')
         .max(20, 'Must be 20 characters or less one uppercase letter, one lowercase letter and one number,one Symbol')
         .required('Please Enter Your Password'),
      confirm_password: Yup.string()
         .min(8, 'Minimum 8 character password one uppercase letter, one lowercase letter and one number,one Symbol')
         .max(20, 'Must be 20 characters or less one uppercase letter, one lowercase letter and one number,one Symbol')
         .required('Please Enter Your Confirm Password'),
})

export default Signupvalidation
