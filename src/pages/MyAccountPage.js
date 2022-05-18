import { useFormik } from "formik";
import * as yup from 'yup'
import axios from "axios";
import { useState } from "react";
import Helmet from "react-helmet";
import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Input } from "../components/Input";
import { Button } from "../components/UI";
import { MainLayout } from "../layouts/MainLayout";

export const MyAccountPage = () => {

    const [active, setActive] = useState("signIn")

    const schema = yup.object().shape({
        firstName: yup.string().required('Firstname is required!'),
        lastName: yup.string().required('Lastname is required!'),
        email: yup.string().email('Enter Valid Email address!').required('Email is required!'),
        password:  yup.string().required('Password is required!')
    });
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleSubmitForm(values)
            console.log("vat",values)
            axios.post('http://localhost:1337/api/profiles', {
                data: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: values.password
                }
            })
        },
    });

    const handleSubmitForm = (values) => {
        console.log('values', values);
    }   

    const { values, handleChange, handleSubmit, handleBlur, isValid, touched, errors } = formik;

    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | My account</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto py-16 px-4 md:py-24">
                <div className="flex flex-col items-center mb-28">
                    <h1 className="text-heading1 text-black font-semibold mb-16">
                        My account
                    </h1>
                    <Tabs>
                        <TabList className="flex px-1.5 py-1.5 md:mb-32 mb-20 bg-light-gray rounded-lg">
                            <Tab className={`cursor-pointer rounded-lg md:px-20 px-12 md:py-3 py-1 outline-none ${active.includes('signIn') ? "bg-white shadow-md duration-500" : "" }`} onClick={() => setActive('signIn')}>
                                <h3 className="md:text-heading3 text-bodySmall text-black font-normal text-center">
                                    Sign in
                                </h3>
                            </Tab>
                            <Tab className={`cursor-pointer rounded-lg md:px-20 px-12 md:py-3 py-1 outline-none ${active.includes('register') ? "bg-white shadow-md duration-500" : "" }`} onClick={() => setActive('register')}>
                                <h3 className="md:text-heading3 text-bodySmall text-black font-normal text-center">
                                    Register
                                </h3>
                            </Tab>
                        </TabList>
                    
                        <TabPanel className="flex flex-col max-w-4xl mx-auto">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-12">
                                    <Input 
                                        name="email" 
                                        type="email" 
                                        placeholder="Email" 
                                        value={values.email} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="mb-12"
                                        error={touched.email ? errors.email : undefined}
                                    />
                                    <Input 
                                        name="password" 
                                        type="password"
                                        placeholder="Password" 
                                        value={values.password} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="mb-4"
                                        error={touched.password ? errors.password : undefined}
                                    />
                                    <div className="flex items-center">
                                        <div className="flex items-center h-5">
                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 text-black bg-white accent-black rounded border border-dark-gray" required/>
                                        </div>
                                        <label htmlFor="remember" className="ml-2 text-heading4 font-normal text-black">Remember me</label>
                                    </div>
                                </div>
                                <div className="flex justify-center mb-3">
                                    <Button 
                                        title="SIGN IN"
                                        outlined={false}
                                        type="submit"
                                        disabled={!isValid}
                                    />
                                </div>
                                <NavLink to="/reset-password" className="text-bodyLarge text-dark-gray hover:text-black text-center flex justify-center">
                                    Have you forgotten your password?
                                </NavLink>
                            </form>
                        </TabPanel>
                        
                        <TabPanel className="flex flex-col max-w-4xl mx-auto md:mb-24 mb-6">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-12">
                                     <Input 
                                        name="firstName" 
                                        type="text" 
                                        placeholder="First name" 
                                        value={values.firstName} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="mb-12"
                                        error={touched.firstName ? errors.firstName : undefined}
                                    />
                                    <Input 
                                        name="lastName" 
                                        type="text" 
                                        placeholder="Last name" 
                                        value={values.lastName} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="mb-12"
                                        error={touched.lastName ? errors.lastName : undefined}
                                    />
                                    <Input 
                                        name="email" 
                                        type="email" 
                                        placeholder="Email" 
                                        value={values.email} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="mb-12"
                                        error={touched.email ? errors.email : undefined}
                                    />
                                    <Input 
                                        name="password" 
                                        type="password"
                                        placeholder="Password" 
                                        value={values.password} 
                                        onChange={handleChange} 
                                        onBlur={handleBlur}
                                        className="mb-4"
                                        error={touched.password ? errors.password : undefined}
                                    />
                                </div>
                                <div className="flex justify-center mb-3">
                                    <Button 
                                        title="REGISTRATION"
                                        outlined={false}
                                        type="submit"
                                        disabled={!isValid}
                                    />
                                </div>
                            </form>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </MainLayout>
    );
}