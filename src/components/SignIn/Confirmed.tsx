import React from 'react';
import { IConfirmed } from '../../types';

const Confirmed = (props: IConfirmed) => {
  const { text } = props;
  return (
    <div className='container-confirmed'>
      <div className='container-confirmed_block'>
        <div className='flex-container'>
          <div className='block-w-info'>
          {!text ? 
            <p className='container-confirmed__text'>
              email ok
              <React.Fragment><br/></React.Fragment>
              reg ok
              <React.Fragment><br/></React.Fragment>
            </p>
            :
            <p className='container-confirmed__text'>{text}</p>
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export { Confirmed };

