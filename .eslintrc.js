module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: [
        'airbnb',
    ],
    parser: '@babel/eslint-parser',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-native',
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1, flatTernaryExpressions: true }],
        'max-len': ['error', { code: 120, ignoreUrls: true }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
        'react/prop-types': 'off',
        'no-unused-expressions': ['error', { allowShortCircuit: true }],
        'no-underscore-dangle': 0,
        'no-console': ['error', { allow: ['log', 'warn'] }],
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
        'class-methods-use-this': 'off',
        'import/no-cycle': 0,
        radix: ['error', 'always'],
        'no-restricted-syntax': ['error', 'ForInStatement'],
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'never' }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'import/prefer-default-export': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.web.js',
                    '.android.js',
                    '.ios.js',
                ],
            },
        },
    },
};
