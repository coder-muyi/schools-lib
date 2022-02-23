SystemJS.config({
  baseURL:'./modules/',
  defaultExtension: true,
  packages: {
    ".": {
      main: './index.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      },
    },
    '*.css': {
      'loader': 'css'
    }
  },
  map: {
    'plugin-babel': 'plugin-babel.js',
    'systemjs-babel-build': 'systemjs-babel-browser.js',
    'react': 'react.development.js',
    'react-dom': 'react-dom.development.js',
    'react-router-dom': 'react-router-dom.production.min.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./index')
  .catch(console.error.bind(console));


/*
'plugin-babel': https://unpkg.com/systemjs-plugin-babel@latest/plugin-babel.js
'systemjs-babel-build': https://unpkg.com/systemjs-plugin-babel@latest/systemjs-babel-browser.js
'react': https://unpkg.com/react@17.0.1/umd/react.development.js
'react-dom': https://unpkg.com/react-dom@17.0.1/umd/react-dom.development.js
*/

/*
SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  packages: {
    ".": {
      main: './index.js',
      defaultExtension: 'js'
    }
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.development.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.development.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./index')
  .catch(console.error.bind(console));
*/

