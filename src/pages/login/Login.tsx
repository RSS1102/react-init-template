import { useDispatch } from 'react-redux';
import { setToken } from '@/redux/model/login';
import { useNavigate } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = () => {
    dispatch(setToken({ token: '123' }));
    console.log('登陆');
    navigate('/home');
  };
  return (
    <>
      未登录, 被重定向到登陆
      <button onClick={() => onLogin()}>确定登陆</button>
    </>
  );
};

export default Login;
