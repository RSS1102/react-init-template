import useTheme from "@/config/theme/useTheme";
import { useNavigate } from "react-router"
import { setTheme } from "@/Redux/model/theme";
import { useDispatch, useSelector } from "react-redux";
import { themeType } from "@/Redux/storeTpye";
const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isDark = useSelector((state: themeType) => state.theme.isDark);
    const Theme = () => {
        dispatch(setTheme())
        useTheme(isDark)

    }
    return (
        <>
            <span>home</span>
            <button onClick={() => { navigate('/redux') }} >Redux</button>
            <button onClick={() => { Theme() }}>改变颜色</button>
            <button onClick={() => { navigate('/error') }} >错误边界</button>
        </>
    )

}
export default Home