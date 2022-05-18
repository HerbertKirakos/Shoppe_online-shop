import { useFormik } from "formik";
import Helmet from "react-helmet";
import * as yup from 'yup'
import { Input } from "../components/Input";
import { Button } from "../components/UI";
import { MainLayout } from "../layouts/MainLayout";

export const ContactPage = () => {

    const schema = yup.object().shape({
        firstName: yup.string().required('Firstname is required!'),
        lastName: yup.string().required('Lastname is required!'),
        email: yup.string().email('Enter Valid Email address!').required('Email is required!'),
        subject: yup.string().required('Subject is required!'),
        message:  yup.string().required('Message is required!')
    });
    
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            handleSubmitForm(values)
        },
    });

    const handleSubmitForm = (values) => {
        console.log('values', values);
    }   

    const { values, handleChange, handleSubmit, handleBlur, isValid, touched, errors } = formik;

    return (
        <MainLayout>
            <Helmet>
                <title>SHOPPE | Contact</title>
            </Helmet>
            <form className="max-w-screen-xl mx-auto py-16 px-4 md:py-24" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center mb-28">
                    <h1 className="text-heading1 text-black font-semibold mb-10">
                        Contact Us
                    </h1>
                    <h3 className="text-heading3 text-black font-normal text-center max-w-xl">
                        Say Hello send us your thoughts about our products or share
                        your ideas with our Team!
                    </h3>
                </div>

                <div className="flex flex-col max-w-4xl mx-auto md:mb-24 mb-6">
                    <div className="sm:flex sm:justify-between gap-28 md:mb-24 mb-0">
                        <Input 
                            name="firstName" 
                            type="text" 
                            placeholder="First name" 
                            value={values.firstName} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className="mb-12 md:mb-0"
                            error={touched.firstName ? errors.firstName : undefined}
                        />
                        <Input 
                            name="lastName" 
                            type="text" 
                            placeholder="Last name" 
                            value={values.lastName} 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="mb-12 md:mb-0" 
                            error={touched.lastName ? errors.lastName : undefined}
                        />
                    </div>
                    <div className="sm:flex sm:justify-between gap-28 md:mb-32 mb-0">
                        <Input 
                            name="email" 
                            type="email" 
                            placeholder="Email" 
                            value={values.email} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className="mb-12 md:mb-0"
                            error={touched.email ? errors.email : undefined}
                        />
                        <Input 
                            name="subject"  
                            type="text" 
                            placeholder="Subject" 
                            value={values.subject} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className="mb-12 md:mb-0"
                            error={touched.subject ? errors.subject : undefined}
                        />
                    </div>
                    <div className="border-b border-light-gray w-full">
                        <textarea 
                            name="message"  
                            type="text" 
                            rows="4" 
                            placeholder="Your message..."
                            value={values.message} 
                            onChange={handleChange} 
                            onBlur={handleBlur}
                            className="w-full text-bodyLarge text-dark-gray outline-none resize-none" 
                            error={touched.message ? errors.message : undefined}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button 
                        type="submit" 
                        title="SEND" 
                        outlined={false} 
                        className="max-w-xl" 
                        disabled={!isValid}
                    />
                </div>
            </form>
        </MainLayout>
    );
}