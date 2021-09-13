import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@lib': path.resolve(__dirname, './src/lib'),
            '@types': path.resolve(__dirname, './src/types.ts'),
        },
    },
});
