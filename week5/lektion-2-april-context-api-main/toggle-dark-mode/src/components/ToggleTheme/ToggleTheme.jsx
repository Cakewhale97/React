import './ToggleTheme.css';
import { useContext } from 'react';
import { UpdateThemeContext } from '../../App';

function ToggleTheme() {
  const setTheme = useContext(UpdateThemeContext);

  function toggle(event) {
    console.log(event.target.checked);

    if (event.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <section className='toggle-theme'>
      <div className='fig'></div>
      <input type='checkbox' id='toggle' onChange={toggle} />
      <label htmlFor='toggle' className='toggle-button'></label>
    </section>
  );
}

export default ToggleTheme;
