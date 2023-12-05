import { useState } from "react";
import { useDispatch } from "react-redux";
import '../../assets/styles/signIn.scss';
import { signIn } from "../../redux/action-creators";

const SignIn = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleInput = (e: any, type: string) => {
    setInput({
      ...input,
      [type]: e.target.value,
    });
  };

  return (
    <div className='container-SignIn'>
      <div className="container-SignIn_block">
        <div className="flex-container">
          <div className='container-SignIn-form'>
            <input className="signIn-inp _email" value={input.email} type="email" title="Email" placeholder="Email" onChange={(val) => 
              handleInput(val, "email")} />
            <input className="signIn-inp _password" value={input.password} type="password" title="Password" placeholder="Password" onChange={(val) => 
              handleInput(val, "password")} />
            <button className="signIn-btn" onClick={() => dispatch(signIn(input))}> 
              Sign In 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignIn };

