/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_URL: string
    // 更多环境变量...
    readonly VITE_BASEURL: string
}

interface ImportMeta {
    readonly VITE_URL: ImportMetaEnv,
    readonly VITE_BASEURL: ImportMetaEnv
}