import { useNavigate } from 'react-router-dom'
const PageNotFoundHome = () => {
    const navigate = useNavigate();
    return (
        <>
            error/404,返回首页
            <button onClick={() => { navigate('/') }}>返回</button>
        </>
    )
}
export default PageNotFoundHome