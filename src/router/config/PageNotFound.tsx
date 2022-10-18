import { useNavigate } from 'react-router-dom';
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      error/404
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        返回
      </button>
    </>
  );
};
export default PageNotFound;
