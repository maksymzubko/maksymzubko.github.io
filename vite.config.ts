import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({command, mode})=> {
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      'process.env': env
    },
    plugins: [react(), tsconfigPaths()],
    base: env.VITE_HOME
  }
})
