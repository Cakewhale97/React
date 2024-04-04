import { useContext } from 'react';
import { ChangeUsernameContext } from '../../App';

function ChangeUsername() {
  const setUsername = useContext(ChangeUsernameContext);

  return (
    <section>
      <input
        type='text'
        onKeyUp={(event) => {
          setUsername(event.target.value);
        }}
      />
    </section>
  );
}

export default ChangeUsername;
