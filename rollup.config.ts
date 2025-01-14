import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

import gzipPlugin from 'rollup-plugin-gzip';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

const libraryName = pkg.libraryName;

// Check if rollup is being used in development (watch) mode and switch variables based on that value
const isDev = process.env.ROLLUP_WATCH === 'true';
const baseDir = isDev ? 'dev/dist/' : 'dist/';
const tsconfig = isDev ? './tsconfig.dev.json' : './tsconfig.json';

const treeShakeBundles = {
  NHTSA: 'src/api/NHTSA.ts',
  Client: 'src/api/Client.ts',
  isValidVin: 'src/utils/isValidVin.ts',
  DecodeVin: 'src/api/actions/DecodeVin.ts',
  DecodeVinExtended: 'src/api/actions/DecodeVinExtended.ts',
  DecodeVinValues: 'src/api/actions/DecodeVinValues.ts',
  DecodeVINValuesBatch: 'src/api/actions/DecodeVINValuesBatch.ts',
  DecodeVinValuesExtended: 'src/api/actions/DecodeVinValuesExtended.ts',
  DecodeWMI: 'src/api/actions/DecodeWMI.ts',
  GetAllMakes: 'src/api/actions/GetAllMakes.ts',
  GetAllManufacturers: 'src/api/actions/GetAllManufacturers.ts',
  GetCanadianVehicleSpecifications:
    'src/api/actions/GetCanadianVehicleSpecifications.ts',
  GetEquipmentPlantCodes: 'src/api/actions/GetEquipmentPlantCodes.ts',
  GetMakeForManufacturer: 'src/api/actions/GetMakeForManufacturer.ts',
  GetMakesForManufacturerAndYear:
    'src/api/actions/GetMakesForManufacturerAndYear.ts',
  GetMakesForVehicleType: 'src/api/actions/GetMakesForVehicleType.ts',
  GetManufacturerDetails: 'src/api/actions/GetManufacturerDetails.ts',
  GetModelsForMake: 'src/api/actions/GetModelsForMake.ts',
  GetModelsForMakeId: 'src/api/actions/GetModelsForMakeId.ts',
  GetModelsForMakeIdYear: 'src/api/actions/GetModelsForMakeIdYear.ts',
  GetModelsForMakeYear: 'src/api/actions/GetModelsForMakeYear.ts',
  GetParts: 'src/api/actions/GetParts.ts',
  GetVehicleTypesForMake: 'src/api/actions/GetVehicleTypesForMake.ts',
  GetVehicleTypesForMakeId: 'src/api/actions/GetVehicleTypesForMakeId.ts',
  GetVehicleVariableList: 'src/api/actions/GetVehicleVariableList.ts',
  GetVehicleVariableValuesList:
    'src/api/actions/GetVehicleVariableValuesList.ts',
  GetWMIsForManufacturer: 'src/api/actions/GetWMIsForManufacturer.ts',
};

// Rollup plugins used with every build
const plugins = [
  json(),
  commonjs(),
  typescript({
    tsconfig,
    typescript: require('typescript'),
    useTsconfigDeclarationDir: true,
    exclude: ['node_modules'],
  }),
  babel({
    include: 'node_modules/isomorphic-unfetch',
    exclude: '**/node_modules/**',
    babelHelpers: 'runtime',
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
  }),
];

/** Browser/Universal Bundles */
const umd = {
  file: `${baseDir}bundle.min.js`,
  name: libraryName,
  format: 'umd',
  esModule: false,
  globals: {
    'isomorphic-unfetch': 'fetch',
  },
  sourcemap: true,
  plugins: [
    gzipPlugin(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};
/** Browser/Universal Bundles */
const iife = {
  file: `${baseDir}browser/iife.js`,
  name: libraryName,
  format: 'iife',
  esModule: false,
  globals: {
    'isomorphic-unfetch': 'fetch',
  },
  sourcemap: false,
  plugins: [
    gzipPlugin(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
};

const universalBundles = {
  input: `src/index.ts`,
  output: [
    /** UMD Bundle */
    umd,
    /**Immediately Invoked Function Expression (IIFE) */
    iife,
  ],
  external: [/isomorphic-unfetch/],
  plugins: [nodeResolve({ preferBuiltins: true, browser: true }), ...plugins],
};

/** CommonJs (CJS) Module */
const commonjsModule = {
  input: { ...treeShakeBundles },
  output: [
    {
      dir: `${baseDir}cjs`,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [nodeResolve({ preferBuiltins: true, browser: false }), ...plugins],
};

/** ESM Module (tree-shaken) */
const esmModule = {
  input: { ...treeShakeBundles },
  output: [
    {
      dir: `${baseDir}module`,
      format: 'esm',
      globals: {
        'isomorphic-unfetch': 'fetch',
      },
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    visualizer({
      filename: 'package-size-stats.html',
      title: '@shaggytools/nhtsa-api-wrapper - Module Package Visualizer',
      sourcemap: true,
    }),
    nodeResolve({ preferBuiltins: true, browser: true }),
    ...plugins,
  ],
};

export default [
  /** Browser/Universal Bundles */
  universalBundles,
  /** CommonJs (CJS) Module */
  commonjsModule,
  /** ESM Module (tree-shaken) */
  esmModule,
];
