import { useEffect, useState } from 'react';

const ErrorBound = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    throw new Error('报错!');
  }, [count]);
  return (
    <div>
      {/* 错误边界只能针对子组件 */}
      <button onClick={addCount}>
        {count}+1={count + 1}
      </button>
    </div>
  );
};

export default ErrorBound;
