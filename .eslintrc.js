module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-unresolved': 'off',
        'arrow-body-style': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'import/no-extraneous-dependencies': 'off',
        'no-param-reassign': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        camelcase: 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
            },
        ],
    },
    overrides: [
        {
            files: ['./src/components/**/index.js', './src/app/**/index.js'],
            rules: {
                'no-restricted-exports': 'off',
            },
        },
        {
            files: ['./src/hooks/useApi.js'],
            rules: {
                'react-hooks/exhaustive-deps': 'off',
            },
        },
    ],
};
