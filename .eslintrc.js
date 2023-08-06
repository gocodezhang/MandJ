module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "plugin:react/recommended",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
        'no-console': 'off',
        'import/no-cycle': 'off',
        'consistent-return': 'off',
        'no-alert': 'off',
        'global-require': 'off',
        'no-param-reassign': 0,
        'no-restricted-syntax': 'off',
        'guard-for-in': 'off',
        'prefer-arrow-callback': 'off',
        'func-names': 'off',
        'import/extensions': 'off',
        'camelcase': 'off',
        'react/prop-types': 'off',
    }
}
