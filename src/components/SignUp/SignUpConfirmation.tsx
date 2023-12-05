import React from 'react';
import { ISignUpConfirmation } from '../../types';


const SignUpConfirmation = (props: ISignUpConfirmation) => {
  const {text, email} = props;
  return (
    <div className='container-signUp-confirmation'>
      <div className='container-signUp-confirmation_block'>
        <div className='flex-container'>
          <div className='block-w-info'>
          {!text ? 
            <p className='container-registration__text'>
              An activation link was send to 
              <React.Fragment><br/></React.Fragment>
              <b>{email}</b>.
              <React.Fragment><br/></React.Fragment>
              Please, activate your account.
            </p>
            :
            <p className='container-signUp-confirmation__text'>{text}</p>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export { SignUpConfirmation };

