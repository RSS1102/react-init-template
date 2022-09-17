import { useNavigate } from "react-router"
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <span>home</span>
            <button onClick={() => { navigate('/redux') }} >Redux</button>
        </>
    )

}
export default Home