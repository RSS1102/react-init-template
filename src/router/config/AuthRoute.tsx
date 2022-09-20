/**
 * @de 路由拦截
 */
import Login from "@/pages/login/Login";
import {  useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { login } from "@/Redux/store";
const AuthRoute = ({ children }: any) => {
    const count = useSelector((state: login) => state.login.isLogin);
    if (count) {
        return <>{children}</>
    } else {
        return (
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to={"/login"} replace ></Navigate>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
                </Routes>
            </BrowserRouter>
        )

    }


}
export default AuthRoute