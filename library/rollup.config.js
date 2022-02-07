import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/lib.ts',
  output: [
    {
      file: 'dist/lib.esm.js',
      format: 'es',
    },
    {
      file: 'dist/lib.umd.js',
      format: 'umd',
      name: 'Lib',
      exports: 'default'
    },
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
};