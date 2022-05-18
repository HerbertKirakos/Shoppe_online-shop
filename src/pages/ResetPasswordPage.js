import { useFormik } from "formik";
import Helmet from "react-helmet";
import * as yup from 'yup'
import { Input } from "../components/Input";
import { Button } from "../components/UI";
import { MainLayout } from "../layouts/MainLayout";

export const ResetPasswordPage = () => {

    const schema = yup.object().shape({
        email: yup.string().email('Enter Valid Email address!').required('Email is required!'),
    });
    
    const formik = useFormik({
        initialValues: {
            email: '',
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
                <title>SHOPPE | Reset password</title>
            </Helmet>
            <form className="max-w-2xl mx-auto py-16 px-4 md:py-24" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center mb-20">
                    <h1 className="md:text-heading1 text-heading3 text-black text-center font-semibold mb-10">
                        Have you Forgotten Your Password ?
                    </h1>
                    <h3 className="md:text-heading3 text-bodySmall text-black font-normal text-center max-w-xl">
                        If you've forgotten your password, enter your e-mail address and we'll send you an e-mail 
                    </h3>
                </div>
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
                <div className="flex justify-center mb-3">
                    <Button 
                        title="RESET PASSWORD" 
                        outlined={false} 
                        type="submit" 
                        disabled={!isValid}
                    />
                </div>
            </form>
        </MainLayout>
    );
}