import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import logo from '../../public/logo.svg'
import { FormInputText } from '../components/form/FormInputText'
import Wrapper from '../assets/wrappers/Register'
import customFetch from '../utils/axios'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
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
    console.log({ ...data })
    try {
        //const response = await customFetch.post('/auth/login', data) //API call
        await store.dispatch(loginUser({ ...data }))
        //toast.success(`You are logged in, ${response?.data?.user?.name}`);
        //console.log(response.data)
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
    const user = useAppSelector((state) => state.counter.user)
    //const navigate = useNavigate();

    if (user) {
        //
    }

    return (
        <Wrapper>
            <Form className='form' method='post'>
                <img src={logo} alt='J' className='logo' />
                <h3>Login</h3>
                <FormInputText name='email' labelText='email' type='email' defaultValue="mike1@gmail.com" />
                <FormInputText name='password' labelText='password' type='password' defaultValue="MikeMike" />
                <button type='submit' className='btn btn-block'
                >Submit</button>
                <p>Not a member yet? <Link to={'/register'} className='member-btn'>Register</Link></p>
            </Form>
        </Wrapper>
    )
}
