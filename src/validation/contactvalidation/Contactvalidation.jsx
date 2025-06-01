import React from 'react'
import * as Yup from 'yup';

const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const numberregex = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/

const Contactvalidation = Yup.object({
       name: Yup.string()
         .min(4, 'Minimum 4 character or Less')
         .max(15, 'Must be 15 characters or less')
         .required('Please Enter Your Name'),
       email: Yup.string()
         .email('Invalid Email address')
         .matches(emailregex , 'Please Match Email Regex Example@gmail.com')
         .required('Please Enter Your Email Address'),
       number: Yup.string()
         .min(11 , 'Please Match Phone Number Regex +8801812000000 & 01712000000')
         .max(13, 'Must be 13 Number or less')
         .required('Please Enter Your Phone Number'),
       message: Yup.string()
         .max(150, 'Must be 20 characters or less')
         .required('Please Enter Your Message'),
})

export default Contactvalidation
