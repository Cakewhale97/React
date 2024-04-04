import './LoginForm.css';
import { useContext } from 'react';
import { ThemeContext } from '../../App';

function LoginForm() {
  const theme = useContext(ThemeContext);

  return (
    <div className={`form form-${theme}`}>
      <input type='text' className='form__input' placeholder='Användarnamn' />
      <input type='text' className='form__input' placeholder='Lösenord' />
      <button className='form__button'>Logga in</button>
    </div>
  );
}

export default LoginForm;
