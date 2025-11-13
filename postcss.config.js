import path from 'node:path';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssImport({
      resolve(id) {
        if (id === 'tailwindcss') {
          return path.resolve(process.cwd(), 'src/styles/tailwind-directives.css');
        }
        return undefined;
      },
    }),
    tailwindcss,
    autoprefixer,
  ],
};
