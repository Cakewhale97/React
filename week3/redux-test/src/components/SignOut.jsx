import { useDispatch } from 'react-redux';
import { signOut } from './authSlice';

function SignOut() {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
}

export default SignOut;