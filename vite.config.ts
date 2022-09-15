import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: env.VITE_BASEURL,
    // 配置路径 https://www.cnblogs.com/chen-cheng/p/16184652.html
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
        "#": path.join(__dirname, "src/types"),
      }
    },
    //代理路径 https://blog.csdn.net/wsdshdhdhd/article/details/126346976
    server: {
      https: false,
      proxy: {
        '/api/': {
          target: 'http://localhost:3000',
          secure: false,//不检测https的合法性
          changeOrigin: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    }
  }
})
