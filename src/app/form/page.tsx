'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import FormInput from '@/app/forminput'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@/app/alert'


export default function Form() {

    const [isAlertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("")

    const router = useRouter();
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
        lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
    });

    const formik = useFormik({
        validationSchema,
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        onSubmit: data => {
            fetch('/api/Form', {
                method: 'POST',
                body: JSON.stringify(data)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 200) {
                        router.push('/dashboard')
                    } else {
                        setAlertVisible(true)
                        setAlertMessage(data.message)
                    }
                });
        },
    });


    return (
        <div className="w-full 2xl:grid grid-cols-2">
            <div className='2xl:h-screen relative'>
            </div>
            <form
                className='flex flex-center flex-col justify-center items-center h-screen'
                onSubmit={formik.handleSubmit}>
                <h1 className='text-center font-bold text-2xl text-white'>Contact Form</h1>
                <div className='w-3/4'>
                    <FormInput
                        type="text"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='text-red-600' style={{ height: '20px' }}>
                            {formik.errors.firstName}
                        </div>
                    ) : (
                        <div style={{ height: '20px', visibility: 'hidden' }}></div>
                    )}
                    <FormInput
                        type="text"
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='text-red-600' style={{ height: '20px' }}>
                            {formik.errors.lastName}
                        </div>
                    ) : (
                        <div style={{ height: '20px', visibility: 'hidden' }}></div>
                    )}
                    <FormInput
                        type="text"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        id="email"
                        name="email"
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className='text-red-600' style={{ height: '20px' }}>
                            {formik.errors.email}
                        </div>
                    ) : (
                        <div style={{ height: '20px', visibility: 'hidden' }}></div>
                    )}
                    <FormInput
                        type="number"
                        placeholder="Phone"
                        onChange={formik.handleChange}
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className='text-red-600' style={{ height: '20px' }}>
                            {formik.errors.phone}
                        </div>
                    ) : (
                        <div style={{ height: '20px', visibility: 'hidden' }}></div>
                    )}
                    <motion.button
                        className="w-full text-black h-14 rounded-md mb-8 bg-rose-400"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.8 }}
                        type='submit'
                    >
                        Submit
                    </motion.button>
                </div>
                <div className='absolute center bottom-10'>
                    {isAlertVisible &&
                        <Alert
                            type="error"
                            message={alertMessage}
                        />}
                </div>
            </form>
        </div>
    )
}
