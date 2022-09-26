import ErrorBoundary from '@/config/ErrorBoundary/ErrorBoundary'
import { useState } from 'react'

const ErrorBound = () => {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1)
    }
    return (
        <div >
            {/* 错误边界只能针对子组件 */}
            <BUT></BUT>
            <button onClick={addCount}>{count}+1={count + 1}</button>
        </div>
    )

}

export default ErrorBound