/**
 * @de 路由拦截
 */
import Login from '@/pages/login/Login';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import { useAppSelector } from '@/redux/hook';
const AuthRoute = () => {
  const Auth = useAppSelector((state) => state.loginReducer.token);
  console.log('Auth', Auth);
  return Auth ? (
    <App />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AuthRoute;
