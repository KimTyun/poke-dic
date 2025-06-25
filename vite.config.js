import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react(), eslint()],
   throwOnError: false, // 에러도 빌드 중단 안 함
   throwOnWarning: false, // 경고도 빌드 중단 안 함
})
