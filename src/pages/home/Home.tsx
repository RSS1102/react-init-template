import useTheme from '@/config/theme/useTheme';
import { useNavigate } from 'react-router';
import { setTheme } from '@/redux/model/theme';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeStateType } from '@/redux/storeType';
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDark = useSelector((state: ThemeStateType) => state.isDark);
  const Theme = () => {
    dispatch(setTheme({ isDark: !isDark }));
    useTheme(!isDark);
  };
  return (
    <>
      <span>home</span>
      <button
        onClick={() => {
          navigate('/redux');
        }}
      >
        Redux
      </button>
      <button
        onClick={() => {
          Theme();
        }}
      >
        改变颜色
      </button>
      <button
        onClick={() => {
          navigate('/error');
        }}
      >
        错误边界
      </button>
    </>
  );
};
export default Home;
