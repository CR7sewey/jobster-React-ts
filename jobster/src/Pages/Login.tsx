import { Form, Link } from 'react-router-dom'
import logo from '../../public/logo.svg'
import { FormInputText } from '../components/form/FormInputText'
import Wrapper from '../assets/wrappers/Register'

export const Login = () => {
    return (
        <Wrapper>
            <Form className='form'>
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
