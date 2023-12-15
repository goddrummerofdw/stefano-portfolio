
import React from 'react'

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const EmailTemplate: React.FC<EmailTemplateProps> = () => {
  // console.log(firstName, lastName, email, phone, message, 'from email template')
  return (
    <div className='w-full h-64 flex justify-center items-center bg-red-500'>
      <p>This is a test</p>
    </div>
  )
}

export default EmailTemplate;