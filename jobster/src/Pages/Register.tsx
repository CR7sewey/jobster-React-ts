import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import logo from '../../public/logo.svg'
import { FormInputText } from '../components/form/FormInputText'
import Wrapper from '../assets/wrappers/Register'
import { toast } from 'react-toastify'
import { registerUser } from '../features/user/userSlice'
import { useAppSelector } from '../hooks'

export const loader = (store) => async () => {
    console.log('aqui')
    const user = store.getState().counter.user
    console.log(user)
    if (user) {
        toast.warn("To access this page please logout.");
        return redirect("/all-jobs");
    }
    return null;
}

export const action = (store) => async ({ request }: { request: Request }) => {
    const dataForm = await request.formData(); // FormData Object
    const entries = [...dataForm.values()]; //.entries
    if (entries.includes("")) {
        return toast.error('You need to provide all the info.');
    }
    const data = Object.fromEntries(dataForm);
    try {
        //const response = await customFetch.post('/auth/register', data) //API call
        //toast.success(`You are registered, ${data.username}`);
        //console.log(response.data)
        store.dispatch(registerUser({ ...data }))
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

const Register = () => {
    const user = useAppSelector((state) => state.counter.user)
    //const navigate = useNavigate();

    if (user) {
        //return navigate('/')
    }
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


