/**
 * @de 路由拦截
 */
import Login from '@/pages/login/Login';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { loginType } from '@/Redux/storeTpye';
import PageNotFoundHome from './PageNotFoundHome';
const AuthRoute = ({ children }: any) => {
  const count = useSelector((state: loginType) => state.login.isLogin);
  console.log(count);
  if (count) {
    return <div>{children}</div>;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFoundHome />} />
        </Routes>
      </BrowserRouter>
    );
  }
};
export default AuthRoute;
