import { Form, Link, redirect } from 'react-router-dom'
import logo from '../../public/logo.svg'
import { FormInputText } from '../components/form/FormInputText'
import Wrapper from '../assets/wrappers/Register'
import customFetch from '../utils/axios'
import { toast } from 'react-toastify'

export const action = async ({ request }: { request: Request }) => {
    const dataForm = await request.formData(); // FormData Object
    const entries = [...dataForm.values()]; //.entries
    if (entries.includes("")) {
        return toast.error('You need to provide all the info.');
    }
    const data = Object.fromEntries(dataForm);
    console.log(data)
    try {
        const response = await customFetch.post('/auth/login', data) //API call
        toast.success(`You are logged in, ${response?.user?.name}`);
        console.log(response.data)
        return redirect("/all-jobs");
    } catch (e) {
        toast.error(
            e?.response?.data?.error?.message ||
            "please double check your credentials"
        );
        console.log(e)
        return e;
    }

}

export const Login = () => {
    return (
        <Wrapper>
            <Form className='form' method='post'>
                <img src={logo} alt='J' className='logo' />
                <h3>Login</h3>
                <FormInputText name='email' labelText='email' type='email' />
                <FormInputText name='password' labelText='password' type='password' />
                <button type='submit' className='btn btn-block'
                >Submit</button>
                <p>Not a member yet? <Link to={'/register'} className='member-btn'>Register</Link></p>
            </Form>
        </Wrapper>
    )
}
