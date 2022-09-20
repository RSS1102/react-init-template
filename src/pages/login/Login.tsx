import { useDispatch } from "react-redux"
import { setToken } from "@/Redux/model/login";
import { useNavigate } from "react-router";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogin = () => {
        console.log('登陆')
        dispatch(setToken())
        navigate('/home')
    }
    return (
        <>
            重定向到登陆
            <button onClick={() => onLogin()}>确定登陆</button>

        </>
    )
}

export default Login