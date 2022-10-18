import ErrorBoundary from '@/config/ErrorBoundary/ErrorBoundary';
import ErrorBound from './ErrorBound';
const ErrorElement = () => {
  return (
    <ErrorBoundary>
      {/*  错误边界只能针对子组件 */}
      <ErrorBound />
    </ErrorBoundary>
  );
};

export default ErrorElement;
