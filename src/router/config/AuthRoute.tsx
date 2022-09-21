/**
 * @de 路由拦截
 */
import Login from "@/pages/login/Login";
import {  useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { loginType } from "@/Redux/storeTpye";
import PageNotFoundHome from "./PageNotFoundHome";
const AuthRoute = ({ children }: any) => {
    const count = useSelector((state: loginType) => state.login.isLogin);
    console.log(count)
    if (count) {
        return <>{children}</>
    } else {
        return (
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to={"/login"} replace ></Navigate>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="*" element={<PageNotFoundHome></PageNotFoundHome>}></Route>
                </Routes>
            </BrowserRouter>
        )

    }


}
export default AuthRoute