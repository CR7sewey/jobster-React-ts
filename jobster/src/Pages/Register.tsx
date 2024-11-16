import { Form, Link, redirect } from 'react-router-dom'
import logo from '../../public/logo.svg'
import { FormInputText } from '../components/form/FormInputText'
import Wrapper from '../assets/wrappers/Register'
import customFetch from '../utils/axios'

export const action = async ({ request }: { request: Request }) => {
    const dataForm = await request.formData(); // FormData Object
    const entries = [...dataForm.values()]; //.entries
    if (entries.includes("")) {
        //return toast.error('You need to provide all the info.');
    }
    const data = Object.fromEntries(dataForm);
    try {
        const response = await customFetch.post('/auth/register', data) //API call
        //toast.success(`You are registered, ${data.username}`);
        console.log(response.data)
        return redirect("/login");
    } catch (e) {
        /*toast.error(
            e?.response?.data?.error?.message ||
            "please double check your credentials"
        );*/
        console.log(e)
        return e;
    }
}

const Register = () => {
    return (
        <Wrapper>
            <Form className='form' method='post'>
                <img src={logo} alt='J' className='logo' />
                <h3>Register</h3>
                <FormInputText name='name' labelText='name' type='text' />
                <FormInputText name='email' labelText='email' type='email' />
                <FormInputText name='password' labelText='password' type='password' />
                <button type='submit' className='btn btn-block'
                >Submit</button>
                <p>Already a member? <Link to={'/login'} className='member-btn'>Login</Link></p>

            </Form>
        </Wrapper>
    )
}

export default Register


