'use client';
import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import FormInput from '@/app/forminput'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Alert from '@/app/alert'
import { useDarkMode } from '../darkmode/darkmodecontext';
import Image from 'next/image';

//Images 
import CardImage from '../../../public/images/cardp.png'

export default function Form() {

    const [isAlertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState("")
    const { darkMode } = useDarkMode()

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
            phone: '',
            message: ''
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
        <div className='flex justify-center items-center flex-col mt-4 '>

            <div className='w-5/6 2xl:w-2/5'>
                <h1 className={`z-10 font-bold text-4xl tracking-tight ${darkMode && "text-secondary"} sm:text-6xl text-left lg:text-center`}> Drop Me a <span className='text-main'>Line</span></h1>

                <p className='text-left md:center-left mb-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi eos animi libero. Commodi debitis enim necessitatibus ad illo? Omnis, amet dignissimos molestias tenetur explicabo id perspiciatis nostrum at porro earum!</p>
            </div>


            <div className='flex w-full h-auto justify-center'>
                <div className="lg:grid grid-cols-2 w-5/6 shadow-xl rounded-3xl">

                    <div className='relative pt-60 pb-60'>
                        <Image
                            className='h-auto object-cover rounded-tl-3xl lg:rounded-bl-3xl max-lg:rounded-tr-3xl'
                            src={CardImage}
                            alt="card-image"
                            fill
                            sizes='100%'

                        />
                    </div>


                    <form
                        className='flex flex-center flex-col justify-center items-center lg:mr-10 pb-4 mt-8'
                        onSubmit={formik.handleSubmit}>

                        <div className='w-5/6 lg:rounded-tr-3xl lg:rounded-br-3xl'>
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
                                type="tel"
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



                            <textarea
                                id="message"
                                name="message"
                                rows={3}
                                className="w-full h-48 text-black text-md rounded-lg pt-4 pl-4 pr-12 mt-2 border-2 block py-1.5 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"

                                placeholder='How can I help?'
                            />


                            <motion.button
                                className="font-bold w-full text-black h-14 rounded-md mb-8 mt-10 bg-main"
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
            </div>
        </div >
    )
}
