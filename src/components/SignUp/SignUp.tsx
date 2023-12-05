import { useState } from "react"
import { useDispatch } from "react-redux"
import '../../assets/styles/signUp.scss'
import { signUp } from "../../redux/action-creators"

const SignUp = () => {
  const dispatch = useDispatch()

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const {confirmPassword, ...newInput} = input;

  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInput = (title: string) => (e: any) => {
    setInput({...input,
      [title]: e.target.value
    });
    handleError(title, e.target.value);
  }

  const handleError = (title: string, value: string) => {
    switch (title) {
      case 'username':
        const r = /^[\w.@+-]+$/;
        !r.test(String(value).toLowerCase()) ? setError({
          ...error, 
          username: 'Name is not correct'
        }) : setError({
          ...error,
          username: ''});
        break;
      case 'email':
        const re = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;
        !re.test(String(value).toLowerCase()) ? setError({
          ...error, 
          email: 'Email is not correct'
        }) : setError({
          ...error, 
          email: ''});
        break;
      case 'password':
        const req = /^[A-Za-z]\w$/;
        req.test(String(value).toLowerCase()) ? setError({
          ...error, 
          password: 'Password is not correct'
        }) : setError({
          ...error, 
          password: ''});
        break;
      case 'confirmPassword':
        input.password !== value ? setError({
          ...error, 
          confirmPassword: 'Password Conformation is not correct'
        }) : setError({
          ...error, 
          confirmPassword: ''});
        break;
      default:
        break;
    }
  }

  return (
    <div className='container-SignUp'>
      <div className='container-SignUp_block'>
        <div className='flex-container'>
          <div className='container-SignUp-form'>
            <input className='signUp-inp _name' value = {input.username} type='default' title='User Name' placeholder='Name' onClick={handleInput('username')} onChange={handleInput('username')}/>
              {error && <div style={{color:'red'}}>{error.username}</div>}
            <input className='signUp-inp _email' value = {input.email} type='email' title='Email' placeholder='Email' onClick={handleInput('email')} onChange={handleInput('email')} />
              {error && <div style={{color:'red'}}>{error.email}</div>}
            <input className='signUp-inp _password'value = {input.password} type='password' title='Password' placeholder='Password' onClick={handleInput('password')} onChange={handleInput('password')}/>
              {error && <div style={{color:'red'}}>{error.password}</div>}
            <input className='signUp-inp _confirmPassword' value = {input.confirmPassword} type='password' title='Confirm Password' placeholder='Confirm your password' onClick={handleInput('confirmPassword')} onChange={handleInput('confirmPassword')} />
              {error && <div style={{color:'red'}}>{error.confirmPassword}</div>}
            <button className = 'signUp-btn' onClick = { () => dispatch(signUp(newInput)) }> 
              Sign Up 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SignUp }

